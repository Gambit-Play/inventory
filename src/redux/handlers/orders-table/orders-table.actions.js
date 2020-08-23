import OrdersTableActionTypes from './orders-table.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setOrderStart = order => ({
	type: OrdersTableActionTypes.SET_ORDERS_ORDER_START,
	payload: order,
});

export const setPageStart = page => ({
	type: OrdersTableActionTypes.SET_ORDERS_PAGE_START,
	payload: page,
});

export const setRowsPerPageStart = rowsPerPage => ({
	type: OrdersTableActionTypes.SET_ORDERS_ROWS_PER_PAGE_START,
	payload: rowsPerPage,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const setOrderSuccess = order => ({
	type: OrdersTableActionTypes.SET_ORDERS_ORDER_SUCCESS,
	payload: order,
});

export const setOrderBySuccess = orderBy => ({
	type: OrdersTableActionTypes.SET_ORDERS_ORDER_BY,
	payload: orderBy,
});

export const setPageSuccess = page => ({
	type: OrdersTableActionTypes.SET_ORDERS_PAGE_SUCCESS,
	payload: page,
});

export const setRowsPerPageSuccess = rowsPerPage => ({
	type: OrdersTableActionTypes.SET_ORDERS_ROWS_PER_PAGE_SUCCESS,
	payload: rowsPerPage,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const setOrderFailure = errorMessage => ({
	type: OrdersTableActionTypes.SET_ORDERS_ORDER_FAILURE,
	payload: errorMessage,
});

export const setPageFailure = errorMessage => ({
	type: OrdersTableActionTypes.SET_ORDERS_PAGE_FAILURE,
	payload: errorMessage,
});

export const setRowsPerPageFailure = errorMessage => ({
	type: OrdersTableActionTypes.SET_ORDERS_ROWS_PER_PAGE_FAILURE,
	payload: errorMessage,
});
