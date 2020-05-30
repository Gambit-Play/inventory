import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import {
	updateDocument,
	createCollectionAndDocument,
	deleteDocuments,
} from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Action Types
import TableDetailActionTypes from './table-detail.types';

// Actions
import { removeSelectedTables } from '../tables-table/tables-table.actions';
import {
	fetchTableSuccess,
	fetchTableFailure,
	updateTableSuccess,
	updateTableFailure,
	createTableSuccess,
	createTableFailure,
	deleteTableSuccess,
	deleteTableFailure,
} from './table-detail.actions';

// Selectors
import { selectSingleTable } from '../../tables/tables.selectors';
import { selectTable } from './table-detail.selectors';
import { selectSelected } from '../tables-table/tables-table.selectors';
import { selectCurrentUser } from '../../users/users.selectors';

/* ================================================================ */
/*  Reusable Actions                                                */
/* ================================================================ */

export function* deleteDocumentsFromCollection(deleteTables) {
	try {
		yield call(deleteDocuments, COLLECTION_IDS.TABLES, deleteTables);
		yield put(deleteTableSuccess());
	} catch (error) {
		console.log(error);
		yield put(deleteTableFailure());
	}
}

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchTableStart({ payload: tableId }) {
	try {
		const table = yield select(selectSingleTable(tableId));
		yield put(fetchTableSuccess(table));
	} catch (error) {
		console.log(error);
		yield put(fetchTableFailure(error));
	}
}

export function* updateTableStart() {
	try {
		const table = yield select(selectTable);
		const currentUser = yield select(selectCurrentUser);
		const updatedTable = {
			id: table.id,
			name: table.name,
			createdAt: table.createdAt,
			createdById: table.createdById,
			updatedAt: new Date().toISOString(),
			updatedById: currentUser.id,
		};

		yield call(
			updateDocument,
			COLLECTION_IDS.TABLES,
			table.id,
			updatedTable
		);
		yield put(updateTableSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateTableFailure());
	}
}

export function* createTableStart() {
	try {
		const table = yield select(selectTable);
		const currentUser = yield select(selectCurrentUser);
		const newTable = [
			{
				name: table.name,
				createdAt: new Date().toISOString(),
				createdById: currentUser.id,
				updatedAt: '',
				updatedById: '',
			},
		];

		yield call(
			createCollectionAndDocument,
			COLLECTION_IDS.TABLES,
			newTable
		);
		yield put(createTableSuccess());
	} catch (error) {
		console.log(error);
		yield put(createTableFailure(error));
	}
}

export function* deleteTableStart() {
	try {
		const table = yield select(selectTable);
		const deleteTable = [table.id];
		yield deleteDocumentsFromCollection(deleteTable);
	} catch (error) {
		console.log(error);
		yield put(deleteTableFailure());
	}
}

export function* deleteMultipleTablesStart() {
	try {
		const selected = yield select(selectSelected);

		yield deleteDocumentsFromCollection(selected);
		yield put(removeSelectedTables());
	} catch (error) {
		console.log(error);
		yield put(deleteTableFailure());
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchTableStart() {
	yield takeLatest(TableDetailActionTypes.FETCH_TABLE_START, fetchTableStart);
}

export function* onUpdateTableStart() {
	yield takeLatest(
		TableDetailActionTypes.UPDATE_TABLE_START,
		updateTableStart
	);
}

export function* onCreateTableStart() {
	yield takeLatest(
		TableDetailActionTypes.CREATE_TABLE_START,
		createTableStart
	);
}

export function* onDeleteTableStart() {
	yield takeLatest(
		TableDetailActionTypes.DELETE_TABLE_START,
		deleteTableStart
	);
}

export function* onDeleteMultipleTablesStart() {
	yield takeLatest(
		TableDetailActionTypes.DELETE_MULTIPLE_TABLES_START,
		deleteMultipleTablesStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* tableDetailSagas() {
	yield all([
		call(onFetchTableStart),
		call(onUpdateTableStart),
		call(onCreateTableStart),
		call(onDeleteTableStart),
		call(onDeleteMultipleTablesStart),
	]);
}
