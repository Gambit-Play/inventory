import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Utils
import { createArrayFromSelected } from '../../../utils/global.utils';

// Types
import ItemsTableActionTypes from './items-table.types';

// Actions
import * as ItemsTableActions from './items-table.actions';

// Selectors
import {
	selectOrder,
	selectOrderBy,
	selectSelected,
	selectSearchField,
	selectFilteredItems,
} from './items-table.selectors';
import { selectCurrentItems } from '../../items/items.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* setOrder({ payload: columnName }) {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const isAsc = yield orderBy === columnName && order === 'asc';

		yield put(ItemsTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc'));
		yield put(ItemsTableActions.setOrderBySuccess(columnName));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setOrderFailure(error));
	}
}

export function* setSelectAll({ payload: checkedAll }) {
	try {
		if (checkedAll) {
			const items = yield select(selectCurrentItems);
			const newSelected = yield items.map(item => item.id);

			yield put(ItemsTableActions.setSelectAllSuccess(newSelected));
		}
		if (!checkedAll) {
			yield put(ItemsTableActions.setSelectAllSuccess([]));
		}
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setSelectAllFailure(error));
	}
}

export function* setOrderByStart() {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const items = yield select(selectFilteredItems);
		const sorter =
			orderBy === 'price' || orderBy === 'cost' || orderBy === 'quantity'
				? orderBy
				: item => {
						return item[orderBy].toLowerCase();
				  };
		const newItems = yield orderData(items, [sorter], order);

		yield put(ItemsTableActions.setFilteredItemsSuccess(newItems));
	} catch (error) {}
}

export function* setPageStart({ payload: page }) {
	try {
		yield put(ItemsTableActions.setPageSuccess(page));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setPageFailure(error));
	}
}

export function* setRowsPerPageStart({ payload: rowsPerPage }) {
	try {
		yield put(
			ItemsTableActions.setRowsPerPageSuccess(parseInt(rowsPerPage, 10))
		);
		yield put(ItemsTableActions.setPageSuccess(0));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setRowsPerPageFailure(error));
	}
}

export function* setSelect({ payload: selectedId }) {
	try {
		const selected = yield select(selectSelected);
		const newSelected = yield createArrayFromSelected(selected, selectedId);

		yield put(ItemsTableActions.setSelectSuccess(newSelected));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setSelectFailure(error));
	}
}

export function* setFilteredItemsStart() {
	try {
		const searchField = yield select(selectSearchField);
		const currentItems = yield select(selectCurrentItems);
		const filteredItems = searchField
			? currentItems.filter(item =>
					item.name.toLowerCase().includes(searchField.toLowerCase())
			  )
			: currentItems;

		yield put(ItemsTableActions.setFilteredItemsSuccess(filteredItems));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setFilteredItemsFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(ItemsTableActionTypes.SET_ORDER_ITEMS_START, setOrder);
}

export function* onSetSelectAllStart() {
	yield takeLatest(
		ItemsTableActionTypes.SET_SELECT_ALL_ITEMS_START,
		setSelectAll
	);
}

export function* onSetSelectStart() {
	yield takeLatest(ItemsTableActionTypes.SET_SELECT_ITEMS_START, setSelect);
}

export function* onSetOrderByStart() {
	yield takeLatest(ItemsTableActionTypes.SET_ITEMS_ORDER_BY, setOrderByStart);
}

export function* onSetPageStart() {
	yield takeLatest(ItemsTableActionTypes.SET_PAGE_ITEMS_START, setPageStart);
}

export function* onSetRowsPerPageStart() {
	yield takeLatest(
		ItemsTableActionTypes.SET_ROWS_PER_PAGE_ITEMS_START,
		setRowsPerPageStart
	);
}

export function* onSetSearchFieldStart() {
	yield takeLatest(
		ItemsTableActionTypes.SET_ITEMS_SEARCH_FIELD,
		setFilteredItemsStart
	);
}

export function* onSetFilteredItemsStart() {
	yield takeLatest(
		ItemsTableActionTypes.SET_FILTERED_ITEMS_START,
		setFilteredItemsStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemsTableSagas() {
	yield all([
		call(onSetOrderStart),
		call(onSetSelectAllStart),
		call(onSetSelectStart),
		call(onSetOrderByStart),
		call(onSetPageStart),
		call(onSetRowsPerPageStart),
		call(onSetSearchFieldStart),
		call(onSetFilteredItemsStart),
	]);
}
