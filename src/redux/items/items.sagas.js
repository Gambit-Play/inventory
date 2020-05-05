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
	fetchItemsCollectionUpdate,
	fetchItemsCollectionSuccess,
	fetchItemsCollectionFailure,
	convertItemsWithUsersStart,
	convertItemsWithUsersSuccess,
	convertItemsWithUsersFailure,
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
			sagaMiddleware.run(fetchCurrentItems);

			const data = snapshot.docs.map(doc => doc.data());

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
		yield put(convertItemsWithUsersStart());

		const allUsers = yield select(selectAllUsers);
		const currentItems = yield select(selectCurrentItems);
		const newCollection = yield currentItems.map(item =>
			updateDataWithUsersName(allUsers, item)
		);

		yield put(convertItemsWithUsersSuccess(newCollection));
	} catch (error) {
		console.log(error);
		yield put(convertItemsWithUsersFailure(error));
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
