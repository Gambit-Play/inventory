import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Redux
import { sagaMiddleware } from '../store';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Utils
import { updateDataWithUsersName } from '../../utils/global-utils';

// Action Types
import ItemsActionTypes from './items.types';

// Actions
import {
	fetchItemsCollectionFailure,
	fetchItemsCollectionUpdate,
	fetchItemsCollectionSuccess,
	convertItemsWithUsersSuccess,
} from './items.actions';
import UsersActionTypes from '../users/users.types';

// Selectors
import { selectCurrentItems } from './items.selectors';
import { selectAllUsers } from '../users/users.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */
let unsubscribe;
export function* fetchItemsCollectionAsync() {
	try {
		const collectionRef = yield getCollection(COLLECTION_IDS.ITEMS);
		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			// This 'sagaMiddleware' makes it possible to run sagas within a callback
			// Calls the 'fetchCollectionsUpdate' function generator when the 'onSnapshot' fires
			sagaMiddleware.run(fetchCurrentItems);

			const data = snapshot.docs.map(doc => doc.data());

			// Calls the success function generator depending on the 'collectionId'
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
	yield call(unsubscribe);
}

export function* convertDataWithUsersStart() {
	try {
		const allUsers = yield select(selectAllUsers);
		const currentItems = yield select(selectCurrentItems);
		const newCollection = yield currentItems.map(item =>
			updateDataWithUsersName(allUsers, item)
		);
		console.table(newCollection);
		yield put(convertItemsWithUsersSuccess(newCollection));
	} catch (error) {
		// console.log(error);
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

export function* onConvertDataWithUsersStart() {
	yield takeLatest(
		UsersActionTypes.FETCH_ALL_USERS_SUCCESS,
		convertDataWithUsersStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemsSagas() {
	yield all([
		call(fetchItemsCollectionStart),
		call(removeListenerStart),
		call(onConvertDataWithUsersStart),
	]);
}
