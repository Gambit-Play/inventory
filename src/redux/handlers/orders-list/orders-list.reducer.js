import OrdersListActionTypes from './orders-list.types';

const INITIAL_STATE = {
	currentOrders: [],
	errorMessage: '',

	// Changed status and id of the specific order.
	status: '',
	id: '',
};

const ordersListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case OrdersListActionTypes.FETCH_ORDERS_SUCCESS:
			return {
				...state,
				currentOrders: action.payload,
			};
		case OrdersListActionTypes.SET_ORDER_STATUS:
			return {
				...state,
				status: action.payload.status,
				id: action.payload.id,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case OrdersListActionTypes.FETCH_ORDERS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default ordersListReducer;
