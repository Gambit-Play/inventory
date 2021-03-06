const OrdersListActionTypes = {
	FETCH_ORDERS_START: 'FETCH_ORDERS_START',
	FETCH_ORDERS_SUCCESS: 'FETCH_ORDERS_SUCCESS',
	FETCH_ORDERS_FAILURE: 'FETCH_ORDERS_FAILURE',

	UPDATE_ORDER_STATUS_START: 'UPDATE_ORDER_STATUS_START',
	UPDATE_ORDER_STATUS_SUCCESS: 'UPDATE_ORDER_STATUS_SUCCESS',
	UPDATE_ORDER_STATUS_FAILURE: 'UPDATE_ORDER_STATUS_FAILURE',

	SET_ORDER_STATUS: 'SET_ORDER_STATUS',

	REMOVE_ORDER_STATUS: 'REMOVE_ORDER_STATUS',

	CLEAR_ORDERS_LIST: 'CLEAR_ORDERS_LIST',
};

export default OrdersListActionTypes;
