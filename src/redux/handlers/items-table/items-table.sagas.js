import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Types
import ItemsTableActionTypes from './items-table.types';

// Actions
import * as ItemsTableActions from './items-table.actions';
import * as ItemsActions from '../../items/items.actions';

// Selectors
import {
	selectOrder,
	selectOrderBy,
	selectSelected,
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
			const newSelecteds = yield items.map(item => item.id);

			yield put(ItemsTableActions.setSelectAllSuccess(newSelecteds));
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
		const items = yield select(selectCurrentItems);
		const sorter =
			orderBy === 'price' || orderBy === 'cost' || orderBy === 'quantity'
				? orderBy
				: item => {
						return item[orderBy].toLowerCase();
				  };

		const newItems = yield orderData(items, [sorter], order);

		yield put(ItemsActions.fetchItemsCollectionSuccess(newItems));
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
		const selectedIndex = selected.indexOf(selectedId);

		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, selectedId);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		yield put(ItemsTableActions.setSelectSuccess(newSelected));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setSelectFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(ItemsTableActionTypes.SET_ORDER_START, setOrder);
}

export function* onSetSelectAllStart() {
	yield takeLatest(ItemsTableActionTypes.SET_SELECT_ALL_START, setSelectAll);
}

export function* onSetSelectStart() {
	yield takeLatest(ItemsTableActionTypes.SET_SELECT_START, setSelect);
}

export function* onSetOrderByStart() {
	yield takeLatest(
		ItemsTableActionTypes.SET_ORDER_BY_SUCCESS,
		setOrderByStart
	);
}

export function* onSetPageStart() {
	yield takeLatest(ItemsTableActionTypes.SET_PAGE_START, setPageStart);
}

export function* onSetRowsPerPageStart() {
	yield takeLatest(
		ItemsTableActionTypes.SET_ROWS_PER_PAGE_START,
		setRowsPerPageStart
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
	]);
}
