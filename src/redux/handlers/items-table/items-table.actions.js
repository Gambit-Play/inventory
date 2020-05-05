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
