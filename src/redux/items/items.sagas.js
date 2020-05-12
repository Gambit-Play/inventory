import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Redux
import { sagaMiddleware } from '../store';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Selectors
import { selectAllUsers } from '../users/users.selectors';

// Action Types
import ItemsActionTypes from './items.types';

// Actions
import {
	fetchItemsCollectionUpdate,
	fetchItemsCollectionSuccess,
	fetchItemsCollectionFailure,
} from './items.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe = null;

export function* fetchItemsCollectionAsync() {
	try {
		const collectionRef = yield call(getCollection, COLLECTION_IDS.ITEMS);
		const allUsers = yield select(selectAllUsers);

		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			sagaMiddleware.run(fetchCurrentItems);

			const data = snapshot.docs.map(doc => {
				const result = doc.data();
				const newData = {
					...result,
					createdByName: allUsers[result.createdBy].displayName,
					updatedByName: allUsers.hasOwnProperty(result.updatedBy)
						? allUsers[result.updatedBy].displayName
						: '',
				};
				return newData;
			});

			sagaMiddleware.run(fetchCurrentItems, data);
		});
	} catch (error) {
		yield put(fetchItemsCollectionFailure(error.message));
	}
}

export function* fetchCurrentItems(data) {
	if (!data) yield put(fetchItemsCollectionUpdate());
	if (data) yield put(fetchItemsCollectionSuccess(data));
}

export function* removeItemsCollectionListener() {
	if (unsubscribe) {
		yield call(unsubscribe);
		unsubscribe = null;
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* fetchItemsCollectionStart() {
	yield takeLatest(
		ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_START,
		fetchItemsCollectionAsync
	);
}

export function* removeListenerStart() {
	yield takeLatest(
		ItemsActionTypes.REMOVE_ITEMS_COLLECTION_LISTENER,
		removeItemsCollectionListener
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemsSagas() {
	yield all([call(fetchItemsCollectionStart), call(removeListenerStart)]);
}
