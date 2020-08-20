import OrdersListActionTypes from './orders-list.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchOrdersStart = () => ({
	type: OrdersListActionTypes.FETCH_ORDERS_START,
});

export const setOrderStatus = (id, status) => ({
	type: OrdersListActionTypes.SET_ORDER_STATUS,
	payload: { id, status },
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
