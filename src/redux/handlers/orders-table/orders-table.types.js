const OrdersTableActionTypes = {
	FETCH_ORDERS_TABLE_START: 'FETCH_ORDERS_TABLE_START',
	FETCH_ORDERS_TABLE_SUCCESS: 'FETCH_ORDERS_TABLE_SUCCESS',
	FETCH_ORDERS_TABLE_FAILURE: 'FETCH_ORDERS_TABLE_FAILURE',

	SET_ORDERS_ORDER_START: 'SET_ORDERS_ORDER_START',
	SET_ORDERS_ORDER_SUCCESS: 'SET_ORDERS_ORDER_SUCCESS',
	SET_ORDERS_ORDER_FAILURE: 'SET_ORDERS_ORDER_FAILURE',

	SET_ORDERS_PAGE_START: 'SET_ORDERS_PAGE_START',
	SET_ORDERS_PAGE_SUCCESS: 'SET_ORDERS_PAGE_SUCCESS',
	SET_ORDERS_PAGE_FAILURE: 'SET_ORDERS_PAGE_FAILURE',

	SET_ORDERS_ROWS_PER_PAGE_START: 'SET_ORDERS_ROWS_PER_PAGE_START',
	SET_ORDERS_ROWS_PER_PAGE_SUCCESS: 'SET_ORDERS_ROWS_PER_PAGE_SUCCESS',
	SET_ORDERS_ROWS_PER_PAGE_FAILURE: 'SET_ORDERS_ROWS_PER_PAGE_FAILURE',

	SET_ORDERS_ORDER_BY: 'SET_ORDERS_ORDER_BY',

	CLEAR_ORDERS_TABLE: 'CLEAR_ORDERS_TABLE',
};

export default OrdersTableActionTypes;
