import OrdersListActionTypes from './orders-list.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchOrdersStart = () => ({
	type: OrdersListActionTypes.FETCH_ORDERS_START,
});

export const setOrderStatusStart = (id, status) => ({
	type: OrdersListActionTypes.SET_ORDER_STATUS_START,
	payload: { id, status },
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchOrdersSuccess = orders => ({
	type: OrdersListActionTypes.FETCH_ORDERS_SUCCESS,
	payload: orders,
});

export const setOrderStatusSuccess = orders => ({
	type: OrdersListActionTypes.SET_ORDER_STATUS_SUCCESS,
	payload: orders,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchOrdersFailure = errorMessage => ({
	type: OrdersListActionTypes.FETCH_ORDERS_FAILURE,
	payload: errorMessage,
});

export const setOrderStatusFailure = errorMessage => ({
	type: OrdersListActionTypes.SET_ORDER_STATUS_FAILURE,
	payload: errorMessage,
});
