import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Types
import MenusTableActionTypes from './menus-table.types';

// Actions
import * as MenusTableActions from './menus-table.actions';

// Selectors
import {
	selectOrder,
	selectOrderBy,
	selectSelected,
	selectSearchField,
	selectFilteredMenus,
} from './menus-table.selectors';
import { selectCurrentMenus } from '../../menus/menus.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* setOrder({ payload: columnName }) {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const isAsc = yield orderBy === columnName && order === 'asc';

		yield put(MenusTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc'));
		yield put(MenusTableActions.setOrderBySuccess(columnName));
	} catch (error) {
		console.log(error);
		yield put(MenusTableActions.setOrderFailure(error));
	}
}

export function* setSelectAll({ payload: checkedAll }) {
	try {
		if (checkedAll) {
			const menus = yield select(selectCurrentMenus);
			const newSelecteds = yield menus.map(menu => menu.id);

			yield put(MenusTableActions.setSelectAllSuccess(newSelecteds));
		}
		if (!checkedAll) {
			yield put(MenusTableActions.setSelectAllSuccess([]));
		}
	} catch (error) {
		console.log(error);
		yield put(MenusTableActions.setSelectAllFailure(error));
	}
}

export function* setOrderByStart() {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const menus = yield select(selectFilteredMenus);
		const sorter =
			orderBy === 'price'
				? orderBy
				: menu => {
						return menu[orderBy].toLowerCase();
				  };
		const newMenus = yield orderData(menus, [sorter], order);

		yield put(MenusTableActions.setFilteredMenusSuccess(newMenus));
	} catch (error) {}
}

export function* setPageStart({ payload: page }) {
	try {
		yield put(MenusTableActions.setPageSuccess(page));
	} catch (error) {
		console.log(error);
		yield put(MenusTableActions.setPageFailure(error));
	}
}

export function* setRowsPerPageStart({ payload: rowsPerPage }) {
	try {
		yield put(
			MenusTableActions.setRowsPerPageSuccess(parseInt(rowsPerPage, 10))
		);
		yield put(MenusTableActions.setPageSuccess(0));
	} catch (error) {
		console.log(error);
		yield put(MenusTableActions.setRowsPerPageFailure(error));
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

		yield put(MenusTableActions.setSelectSuccess(newSelected));
	} catch (error) {
		console.log(error);
		yield put(MenusTableActions.setSelectFailure(error));
	}
}

export function* setFilteredMenusStart() {
	try {
		const searchField = yield select(selectSearchField);
		const currentMenus = yield select(selectCurrentMenus);
		const filteredMenus = searchField
			? currentMenus.filter(menu =>
					menu.name.toLowerCase().includes(searchField.toLowerCase())
			  )
			: currentMenus;

		yield put(MenusTableActions.setFilteredMenusSuccess(filteredMenus));
	} catch (error) {
		console.log(error);
		yield put(MenusTableActions.setFilteredMenusFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(MenusTableActionTypes.SET_ORDER_MENUS_START, setOrder);
}

export function* onSetSelectAllStart() {
	yield takeLatest(
		MenusTableActionTypes.SET_SELECT_ALL_MENUS_START,
		setSelectAll
	);
}

export function* onSetSelectStart() {
	yield takeLatest(MenusTableActionTypes.SET_SELECT_MENUS_START, setSelect);
}

export function* onSetOrderByStart() {
	yield takeLatest(MenusTableActionTypes.SET_MENUS_ORDER_BY, setOrderByStart);
}

export function* onSetPageStart() {
	yield takeLatest(MenusTableActionTypes.SET_PAGE_MENUS_START, setPageStart);
}

export function* onSetRowsPerPageStart() {
	yield takeLatest(
		MenusTableActionTypes.SET_ROWS_PER_PAGE_MENUS_START,
		setRowsPerPageStart
	);
}

export function* onSetSearchFieldStart() {
	yield takeLatest(
		MenusTableActionTypes.SET_MENUS_SEARCH_FIELD,
		setFilteredMenusStart
	);
}

export function* onSetFilteredMenusStart() {
	yield takeLatest(
		MenusTableActionTypes.SET_FILTERED_MENUS_START,
		setFilteredMenusStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* menusTableSagas() {
	yield all([
		call(onSetOrderStart),
		call(onSetSelectAllStart),
		call(onSetSelectStart),
		call(onSetOrderByStart),
		call(onSetPageStart),
		call(onSetRowsPerPageStart),
		call(onSetSearchFieldStart),
		call(onSetFilteredMenusStart),
	]);
}
