import OrdersActionTypes from './orders.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchOrdersCollectionStart = () => ({
	type: OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_START,
});

/* ================================================================ */
/*  Process Update 	                                                */
/* ================================================================ */

export const fetchOrdersCollectionUpdate = () => ({
	type: OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_UPDATE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchOrdersCollectionSuccess = orders => ({
	type: OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_SUCCESS,
	payload: orders,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const fetchOrdersCollectionFailure = errorMessage => ({
	type: OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove 	                                                */
/* ================================================================ */

export const removeOrdersCollectionListener = () => ({
	type: OrdersActionTypes.REMOVE_ORDERS_COLLECTION_LISTENER,
});

export const clearOrdersStart = () => ({
	type: OrdersActionTypes.CLEAR_ORDERS_COLLECTIONS,
});
