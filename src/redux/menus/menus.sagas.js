import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Action Types
import MenusActionTypes from './menus.types';

// Actions
import {
	fetchMenusCollectionSuccess,
	fetchMenusCollectionFailure,
	fetchMenusCollectionUpdate,
} from './menus.actions';
import { setFilteredMenusStart } from '../handlers/menus-table/menus-table.actions';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Selectors
import { selectAllUsers } from '../users/users.selectors';
import { selectCurrentCategories } from '../categories/categories.selectors';

// Redux
import { sagaMiddleware } from '../store';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe;

export function* fetchMenusCollectionAsync() {
	try {
		const collectionRef = yield call(getCollection, COLLECTION_IDS.MENUS);
		const allUsers = yield select(selectAllUsers);
		const currentCategories = yield select(selectCurrentCategories);

		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			sagaMiddleware.run(fetchCurrentMenus);

			const data = snapshot.docs.map(doc => {
				const result = doc.data();
				const res = currentCategories.find(
					category => category.id === result.categoryId
				);
				const newData = {
					...result,
					createdBy: allUsers[result.createdById].displayName,
					updatedBy: allUsers.hasOwnProperty(result.updatedById)
						? allUsers[result.updatedById].displayName
						: '',
					category: res ? res.name : '',
				};
				return newData;
			});

			sagaMiddleware.run(fetchCurrentMenus, data);
		});
	} catch (error) {
		yield put(fetchMenusCollectionFailure(error.message));
	}
}

export function* fetchCurrentMenus(data) {
	if (!data) yield put(fetchMenusCollectionUpdate());
	if (data) {
		yield put(fetchMenusCollectionSuccess(data));
		yield put(setFilteredMenusStart());
	}
}

export function* removeCollectionListener() {
	yield call(unsubscribe);
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onfetchMenusCollectionStart() {
	yield takeLatest(
		MenusActionTypes.FETCH_MENUS_COLLECTIONS_START,
		fetchMenusCollectionAsync
	);
}

export function* onremoveListenerStart() {
	yield takeLatest(
		MenusActionTypes.REMOVE_MENUS_COLLECTION_LISTENER,
		removeCollectionListener
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* menusSagas() {
	yield all([call(onfetchMenusCollectionStart), call(onremoveListenerStart)]);
}
