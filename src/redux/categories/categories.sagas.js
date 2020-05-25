import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Redux
import { sagaMiddleware } from '../store';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Selectors
import { selectAllUsers } from '../users/users.selectors';

// Action Types
import CategoriesActionTypes from './categories.types';

// Action
import {
	fetchCategoriesCollectionSuccess,
	fetchCategoriesCollectionFailure,
	fetchCategoriesCollectionUpdate,
} from './categories.actions';
import { setFilteredCategoriesStart } from '../handlers/categories-table/categories-table.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe = null;

export function* fetchCategoriesCollectionAsync() {
	try {
		const collectionRef = yield call(
			getCollection,
			COLLECTION_IDS.CATEGORIES
		);
		const allUsers = yield select(selectAllUsers);

		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			sagaMiddleware.run(fetchCurrentCategories);

			const data = snapshot.docs.map(doc => {
				const result = doc.data();

				const newData = {
					...result,
					createdBy: allUsers[result.createdById].displayName,
					updatedBy: allUsers.hasOwnProperty(result.updatedById)
						? allUsers[result.updatedById].displayName
						: '',
				};
				return newData;
			});

			sagaMiddleware.run(fetchCurrentCategories, data);
		});
	} catch (error) {
		console.log(error);
		yield put(fetchCategoriesCollectionFailure(error));
	}
}

export function* fetchCurrentCategories(data) {
	if (!data) yield put(fetchCategoriesCollectionUpdate());
	if (data) {
		yield put(fetchCategoriesCollectionSuccess(data));
		yield put(setFilteredCategoriesStart());
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchCategoriesStart() {
	yield takeLatest(
		CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_START,
		fetchCategoriesCollectionAsync
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* categoriesSagas() {
	yield all([call(onFetchCategoriesStart)]);
}
