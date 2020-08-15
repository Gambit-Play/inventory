import OrdersActionTypes from './orders.types';

const INITIAL_STATE = {
	currentOrders: null,
	isFetching: false,
	errorMessage: '',
};

const ordersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current Items                                                   */
		/* ================================================================ */
		case OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		case OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_UPDATE:
			return {
				...state,
				isFetching: true,
			};
		case OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentOrders: action.payload,
			};
		case OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Clear Items                                                     */
		/* ================================================================ */
		case OrdersActionTypes.CLEAR_ORDERS_COLLECTIONS:
			return {
				...state,
				currentOrders: null,
				isFetching: false,
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default ordersReducer;
