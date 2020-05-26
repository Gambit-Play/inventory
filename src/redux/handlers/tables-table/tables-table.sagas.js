import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Utils
import { createArrayFromSelected } from '../../../utils/global.utils';

// Types
import TablesTableActionTypes from './tables-table.types';

// Actions
import * as TablesTableActions from './tables-table.actions';

// Selectors
import {
	selectOrder,
	selectOrderBy,
	selectSelected,
	selectSearchField,
	selectFilteredTables,
} from './tables-table.selectors';
import { selectCurrentTables } from '../../tables/tables.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* setOrder({ payload: columnName }) {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const isAsc = yield orderBy === columnName && order === 'asc';

		yield put(TablesTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc'));
		yield put(TablesTableActions.setOrderBySuccess(columnName));
	} catch (error) {
		console.log(error);
		yield put(TablesTableActions.setOrderFailure(error));
	}
}

export function* setSelectAll({ payload: checkedAll }) {
	try {
		if (checkedAll) {
			const tables = yield select(selectCurrentTables);
			const newSelecteds = yield tables.map(table => table.id);

			yield put(TablesTableActions.setSelectAllSuccess(newSelecteds));
		}
		if (!checkedAll) {
			yield put(TablesTableActions.setSelectAllSuccess([]));
		}
	} catch (error) {
		console.log(error);
		yield put(TablesTableActions.setSelectAllFailure(error));
	}
}

export function* setOrderByStart() {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const tables = yield select(selectFilteredTables);
		const sorter = table => table[orderBy].toLowerCase();
		const newTables = yield orderData(tables, [sorter], order);

		yield put(TablesTableActions.setFilteredTablesSuccess(newTables));
	} catch (error) {}
}

export function* setPageStart({ payload: page }) {
	try {
		yield put(TablesTableActions.setPageSuccess(page));
	} catch (error) {
		console.log(error);
		yield put(TablesTableActions.setPageFailure(error));
	}
}

export function* setRowsPerPageStart({ payload: rowsPerPage }) {
	try {
		yield put(
			TablesTableActions.setRowsPerPageSuccess(parseInt(rowsPerPage, 10))
		);
		yield put(TablesTableActions.setPageSuccess(0));
	} catch (error) {
		console.log(error);
		yield put(TablesTableActions.setRowsPerPageFailure(error));
	}
}

export function* setSelect({ payload: selectedId }) {
	try {
		const selected = yield select(selectSelected);
		const newSelected = yield createArrayFromSelected(selected, selectedId);

		yield put(TablesTableActions.setSelectSuccess(newSelected));
	} catch (error) {
		console.log(error);
		yield put(TablesTableActions.setSelectFailure(error));
	}
}

export function* setFilteredTablesStart() {
	try {
		const searchField = yield select(selectSearchField);
		const currentTables = yield select(selectCurrentTables);
		const filteredTables = searchField
			? currentTables.filter(table =>
					table.name.toLowerCase().includes(searchField.toLowerCase())
			  )
			: currentTables;

		yield put(TablesTableActions.setFilteredTablesSuccess(filteredTables));
	} catch (error) {
		console.log(error);
		yield put(TablesTableActions.setFilteredTablesFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(TablesTableActionTypes.SET_ORDER_TABLES_START, setOrder);
}

export function* onSetSelectAllStart() {
	yield takeLatest(
		TablesTableActionTypes.SET_SELECT_ALL_TABLES_START,
		setSelectAll
	);
}

export function* onSetSelectStart() {
	yield takeLatest(TablesTableActionTypes.SET_SELECT_TABLES_START, setSelect);
}

export function* onSetOrderByStart() {
	yield takeLatest(
		TablesTableActionTypes.SET_TABLES_ORDER_BY,
		setOrderByStart
	);
}

export function* onSetPageStart() {
	yield takeLatest(
		TablesTableActionTypes.SET_PAGE_TABLES_START,
		setPageStart
	);
}

export function* onSetRowsPerPageStart() {
	yield takeLatest(
		TablesTableActionTypes.SET_ROWS_PER_PAGE_TABLES_START,
		setRowsPerPageStart
	);
}

export function* onSetSearchFieldStart() {
	yield takeLatest(
		TablesTableActionTypes.SET_TABLES_SEARCH_FIELD,
		setFilteredTablesStart
	);
}

export function* onSetFilteredTablesStart() {
	yield takeLatest(
		TablesTableActionTypes.SET_FILTERED_TABLES_START,
		setFilteredTablesStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* tablesTableSagas() {
	yield all([
		call(onSetOrderStart),
		call(onSetSelectAllStart),
		call(onSetSelectStart),
		call(onSetOrderByStart),
		call(onSetPageStart),
		call(onSetRowsPerPageStart),
		call(onSetSearchFieldStart),
		call(onSetFilteredTablesStart),
	]);
}
