import ItemsTableActionTypes from './items-table.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setOrderStart = order => ({
	type: ItemsTableActionTypes.SET_ORDER_START,
	payload: order,
});

export const setSelectAllStart = checkedAll => ({
	type: ItemsTableActionTypes.SET_SELECT_ALL_START,
	payload: checkedAll,
});

export const setSelectStart = selectedId => ({
	type: ItemsTableActionTypes.SET_SELECT_START,
	payload: selectedId,
});

export const setPageStart = page => ({
	type: ItemsTableActionTypes.SET_PAGE_START,
	payload: page,
});

export const setRowsPerPageStart = rowsPerPage => ({
	type: ItemsTableActionTypes.SET_ROWS_PER_PAGE_START,
	payload: rowsPerPage,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const setOrderSuccess = order => ({
	type: ItemsTableActionTypes.SET_ORDER_SUCCESS,
	payload: order,
});

export const setOrderBySuccess = orderBy => ({
	type: ItemsTableActionTypes.SET_ORDER_BY_SUCCESS,
	payload: orderBy,
});

export const setSelectAllSuccess = selected => ({
	type: ItemsTableActionTypes.SET_SELECT_ALL_SUCCESS,
	payload: selected,
});

export const setSelectSuccess = selected => ({
	type: ItemsTableActionTypes.SET_SELECT_SUCCESS,
	payload: selected,
});

export const setPageSuccess = page => ({
	type: ItemsTableActionTypes.SET_PAGE_SUCCESS,
	payload: page,
});

export const setRowsPerPageSuccess = rowsPerPage => ({
	type: ItemsTableActionTypes.SET_ROWS_PER_PAGE_SUCCESS,
	payload: rowsPerPage,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const setOrderFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_ORDER_FAILURE,
	payload: errorMessage,
});

export const setSelectAllFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_SELECT_ALL_FAILURE,
	payload: errorMessage,
});

export const setSelectFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_SELECT_FAILURE,
	payload: errorMessage,
});

export const setPageFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_PAGE_FAILURE,
	payload: errorMessage,
});

export const setRowsPerPageFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_ROWS_PER_PAGE_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeSelected = () => ({
	type: ItemsTableActionTypes.REMOVE_SELECTED,
});
