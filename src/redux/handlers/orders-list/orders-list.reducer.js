import OrdersListActionTypes from './orders-list.types';

const INITIAL_STATE = {
	currentOrders: [],
	errorMessage: '',

	// Changed status and id of the specific order.
	status: '',
	id: '',
	isUpdating: false,
};

const ordersListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Start                                                   */
		/* ================================================================ */
		case OrdersListActionTypes.UPDATE_ORDER_STATUS_START:
			return {
				...state,
				isUpdating: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case OrdersListActionTypes.FETCH_ORDERS_SUCCESS:
			return {
				...state,
				currentOrders: action.payload,
				isUpdating: false,
				status: '',
				id: '',
			};
		case OrdersListActionTypes.UPDATE_ORDER_STATUS_SUCCESS:
			return {
				...state,
				isUpdating: false,
				status: '',
				id: '',
			};
		case OrdersListActionTypes.SET_ORDER_STATUS:
			return {
				...state,
				status: action.payload.status,
				id: action.payload.id,
			};
		/* ================================================================ */
		/*  Process Remove                                                  */
		/* ================================================================ */
		case OrdersListActionTypes.REMOVE_ORDER_STATUS:
			return {
				...state,
				status: '',
				id: '',
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case OrdersListActionTypes.FETCH_ORDERS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
				isUpdating: false,
			};
		case OrdersListActionTypes.UPDATE_ORDER_STATUS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default ordersListReducer;
