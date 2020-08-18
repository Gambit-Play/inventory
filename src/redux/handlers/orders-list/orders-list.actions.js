import OrdersListActionTypes from './orders-list.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchOrdersStart = () => ({
	type: OrdersListActionTypes.FETCH_ORDERS_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchOrdersSuccess = orders => ({
	type: OrdersListActionTypes.FETCH_ORDERS_SUCCESS,
	payload: orders,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchOrdersFailure = errorMessage => ({
	type: OrdersListActionTypes.FETCH_ORDERS_FAILURE,
	payload: errorMessage,
});
