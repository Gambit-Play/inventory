import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Redux
import { sagaMiddleware } from '../store';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Selectors
import { selectAllUsers } from '../users/users.selectors';

// Action Types
import TablesActionTypes from './tables.types';

// Action
import {
	fetchTablesCollectionSuccess,
	fetchTablesCollectionFailure,
	fetchTablesCollectionUpdate,
} from './tables.actions';
import { setFilteredTablesStart } from '../handlers/tables-table/tables-table.actions';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe = null;

export function* fetchTablesCollectionAsync() {
	try {
		const collectionRef = yield call(getCollection, COLLECTION_IDS.TABLES);
		const allUsers = yield select(selectAllUsers);

		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			sagaMiddleware.run(fetchCurrentTables);

			const data = snapshot.docs.map(doc => {
				const result = doc.data();

				const newData = {
					...result,
					status: '',
					createdBy: allUsers.hasOwnProperty(result.createdById)
						? allUsers[result.createdById].displayName
						: '',
					updatedBy: allUsers.hasOwnProperty(result.updatedById)
						? allUsers[result.updatedById].displayName
						: '',
				};
				return newData;
			});

			const sorter = table => table.name.toLowerCase();
			const sortedTables = orderData(data, [sorter], 'asc');

			sagaMiddleware.run(fetchCurrentTables, sortedTables);
		});
	} catch (error) {
		console.log(error);
		yield put(fetchTablesCollectionFailure(error));
	}
}

export function* fetchCurrentTables(data) {
	if (!data) yield put(fetchTablesCollectionUpdate());
	if (data) {
		yield put(fetchTablesCollectionSuccess(data));
		yield put(setFilteredTablesStart());
	}
}

export function* removeCollectionListener() {
	yield call(unsubscribe);
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchTablesStart() {
	yield takeLatest(
		TablesActionTypes.FETCH_TABLES_COLLECTIONS_START,
		fetchTablesCollectionAsync
	);
}

export function* onremoveListenerStart() {
	yield takeLatest(
		TablesActionTypes.REMOVE_TABLES_COLLECTION_LISTENER,
		removeCollectionListener
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* tablesSagas() {
	yield all([call(onFetchTablesStart), call(onremoveListenerStart)]);
}
