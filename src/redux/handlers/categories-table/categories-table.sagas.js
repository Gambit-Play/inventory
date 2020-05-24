import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Utils
import { createArrayFromSelected } from '../../../utils/global.utils';

// Types
import CategoriesTableActionTypes from './categories-table.types';

// Actions
import * as CategoriesTableActions from './categories-table.actions';

// Selectors
import {
	selectOrder,
	selectOrderBy,
	selectSelected,
	selectSearchField,
	selectFilteredCategories,
} from './categories-table.selectors';
import { selectCurrentCategories } from '../../categories/categories.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* setOrder({ payload: columnName }) {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const isAsc = yield orderBy === columnName && order === 'asc';

		yield put(
			CategoriesTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc')
		);
		yield put(CategoriesTableActions.setOrderBySuccess(columnName));
	} catch (error) {
		console.log(error);
		yield put(CategoriesTableActions.setOrderFailure(error));
	}
}

export function* setSelectAll({ payload: checkedAll }) {
	try {
		if (checkedAll) {
			const categories = yield select(selectCurrentCategories);
			const newSelecteds = yield categories.map(category => category.id);

			yield put(CategoriesTableActions.setSelectAllSuccess(newSelecteds));
		}
		if (!checkedAll) {
			yield put(CategoriesTableActions.setSelectAllSuccess([]));
		}
	} catch (error) {
		console.log(error);
		yield put(CategoriesTableActions.setSelectAllFailure(error));
	}
}

export function* setOrderByStart() {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const categories = yield select(selectFilteredCategories);
		const sorter = category => category[orderBy].toLowerCase();
		const newCategories = yield orderData(categories, [sorter], order);

		yield put(
			CategoriesTableActions.setFilteredCategoriesSuccess(newCategories)
		);
	} catch (error) {}
}

export function* setPageStart({ payload: page }) {
	try {
		yield put(CategoriesTableActions.setPageSuccess(page));
	} catch (error) {
		console.log(error);
		yield put(CategoriesTableActions.setPageFailure(error));
	}
}

export function* setRowsPerPageStart({ payload: rowsPerPage }) {
	try {
		yield put(
			CategoriesTableActions.setRowsPerPageSuccess(
				parseInt(rowsPerPage, 10)
			)
		);
		yield put(CategoriesTableActions.setPageSuccess(0));
	} catch (error) {
		console.log(error);
		yield put(CategoriesTableActions.setRowsPerPageFailure(error));
	}
}

export function* setSelect({ payload: selectedId }) {
	try {
		const selected = yield select(selectSelected);
		const newSelected = yield createArrayFromSelected(selected, selectedId);

		yield put(CategoriesTableActions.setSelectSuccess(newSelected));
	} catch (error) {
		console.log(error);
		yield put(CategoriesTableActions.setSelectFailure(error));
	}
}

export function* setFilteredCategoriesStart() {
	try {
		const searchField = yield select(selectSearchField);
		const currentCategories = yield select(selectCurrentCategories);
		const filteredCategories = searchField
			? currentCategories.filter(category =>
					category.name
						.toLowerCase()
						.includes(searchField.toLowerCase())
			  )
			: currentCategories;

		yield put(
			CategoriesTableActions.setFilteredCategoriesSuccess(
				filteredCategories
			)
		);
	} catch (error) {
		console.log(error);
		yield put(CategoriesTableActions.setFilteredCategoriesFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_ORDER_CATEGORIES_START,
		setOrder
	);
}

export function* onSetSelectAllStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_SELECT_ALL_CATEGORIES_START,
		setSelectAll
	);
}

export function* onSetSelectStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_SELECT_CATEGORIES_START,
		setSelect
	);
}

export function* onSetOrderByStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_CATEGORIES_ORDER_BY,
		setOrderByStart
	);
}

export function* onSetPageStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_PAGE_CATEGORIES_START,
		setPageStart
	);
}

export function* onSetRowsPerPageStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_ROWS_PER_PAGE_CATEGORIES_START,
		setRowsPerPageStart
	);
}

export function* onSetSearchFieldStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_CATEGORIES_SEARCH_FIELD,
		setFilteredCategoriesStart
	);
}

export function* onSetFilteredCategoriesStart() {
	yield takeLatest(
		CategoriesTableActionTypes.SET_FILTERED_CATEGORIES_START,
		setFilteredCategoriesStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* categoriesTableSagas() {
	yield all([
		call(onSetOrderStart),
		call(onSetSelectAllStart),
		call(onSetSelectStart),
		call(onSetOrderByStart),
		call(onSetPageStart),
		call(onSetRowsPerPageStart),
		call(onSetSearchFieldStart),
		call(onSetFilteredCategoriesStart),
	]);
}
