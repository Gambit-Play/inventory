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

export const updateOrderStatusStart = () => ({
	type: OrdersListActionTypes.UPDATE_ORDER_STATUS_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchOrdersSuccess = orders => ({
	type: OrdersListActionTypes.FETCH_ORDERS_SUCCESS,
	payload: orders,
});

export const updateOrderStatusSuccess = () => ({
	type: OrdersListActionTypes.UPDATE_ORDER_STATUS_SUCCESS,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchOrdersFailure = errorMessage => ({
	type: OrdersListActionTypes.FETCH_ORDERS_FAILURE,
	payload: errorMessage,
});

export const updateOrderStatusFailure = errorMessage => ({
	type: OrdersListActionTypes.UPDATE_ORDER_STATUS_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove	       	                                        */
/* ================================================================ */

export const removeOrderStatus = () => ({
	type: OrdersListActionTypes.REMOVE_ORDER_STATUS,
});

export const clearOrdersList = () => ({
	type: OrdersListActionTypes.CLEAR_ORDERS_LIST,
});
