import CategoriesTableActionTypes from './categories-table.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setOrderStart = order => ({
	type: CategoriesTableActionTypes.SET_ORDER_CATEGORIES_START,
	payload: order,
});

export const setSelectAllStart = checkedAll => ({
	type: CategoriesTableActionTypes.SET_SELECT_ALL_CATEGORIES_START,
	payload: checkedAll,
});

export const setSelectStart = selectedId => ({
	type: CategoriesTableActionTypes.SET_SELECT_CATEGORIES_START,
	payload: selectedId,
});

export const setPageStart = page => ({
	type: CategoriesTableActionTypes.SET_PAGE_CATEGORIES_START,
	payload: page,
});

export const setRowsPerPageStart = rowsPerPage => ({
	type: CategoriesTableActionTypes.SET_ROWS_PER_PAGE_CATEGORIES_START,
	payload: rowsPerPage,
});

export const setSearchFieldStart = search => ({
	type: CategoriesTableActionTypes.SET_CATEGORIES_SEARCH_FIELD,
	payload: search,
});

export const setFilteredCategoriesStart = () => ({
	type: CategoriesTableActionTypes.SET_FILTERED_CATEGORIES_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const setOrderSuccess = order => ({
	type: CategoriesTableActionTypes.SET_ORDER_CATEGORIES_SUCCESS,
	payload: order,
});

export const setOrderBySuccess = orderBy => ({
	type: CategoriesTableActionTypes.SET_CATEGORIES_ORDER_BY,
	payload: orderBy,
});

export const setSelectAllSuccess = selected => ({
	type: CategoriesTableActionTypes.SET_SELECT_ALL_CATEGORIES_SUCCESS,
	payload: selected,
});

export const setSelectSuccess = selected => ({
	type: CategoriesTableActionTypes.SET_SELECT_CATEGORIES_SUCCESS,
	payload: selected,
});

export const setPageSuccess = page => ({
	type: CategoriesTableActionTypes.SET_PAGE_CATEGORIES_SUCCESS,
	payload: page,
});

export const setRowsPerPageSuccess = rowsPerPage => ({
	type: CategoriesTableActionTypes.SET_ROWS_PER_PAGE_CATEGORIES_SUCCESS,
	payload: rowsPerPage,
});

export const setFilteredCategoriesSuccess = list => ({
	type: CategoriesTableActionTypes.SET_FILTERED_CATEGORIES_SUCCESS,
	payload: list,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const setOrderFailure = errorMessage => ({
	type: CategoriesTableActionTypes.SET_ORDER_CATEGORIES_FAILURE,
	payload: errorMessage,
});

export const setSelectAllFailure = errorMessage => ({
	type: CategoriesTableActionTypes.SET_SELECT_ALL_CATEGORIES_FAILURE,
	payload: errorMessage,
});

export const setSelectFailure = errorMessage => ({
	type: CategoriesTableActionTypes.SET_SELECT_CATEGORIES_FAILURE,
	payload: errorMessage,
});

export const setPageFailure = errorMessage => ({
	type: CategoriesTableActionTypes.SET_PAGE_CATEGORIES_FAILURE,
	payload: errorMessage,
});

export const setRowsPerPageFailure = errorMessage => ({
	type: CategoriesTableActionTypes.SET_ROWS_PER_PAGE_CATEGORIES_FAILURE,
	payload: errorMessage,
});

export const setFilteredCategoriesFailure = errorMessage => ({
	type: CategoriesTableActionTypes.SET_FILTERED_CATEGORIES_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeSelectedCategories = () => ({
	type: CategoriesTableActionTypes.REMOVE_SELECTED_CATEGORIES,
});

export const removeCategoriesOrderBy = () => ({
	type: CategoriesTableActionTypes.REMOVE_CATEGORIES_ORDER_BY,
});

export const removeCategoriesSearchField = () => ({
	type: CategoriesTableActionTypes.REMOVE_CATEGORIES_SEARCH_FIELD,
});
