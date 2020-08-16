import OrdersListActionTypes from './orders-list.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchMenuStart = () => ({
	type: OrdersListActionTypes.FETCH_ORDERS_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchMenuSuccess = orders => ({
	type: OrdersListActionTypes.FETCH_ORDERS_SUCCESS,
	payload: orders,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchMenuFailure = errorMessage => ({
	type: OrdersListActionTypes.FETCH_ORDERS_FAILURE,
	payload: errorMessage,
});
