import OrdersListActionTypes from './orders-list.types';

const INITIAL_STATE = {
	currentOrders: [],
	errorMessage: '',
};

const ordersListReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OrdersListActionTypes.FETCH_ORDERS_SUCCESS:
			return {
				...state,
				currentOrders: action.payload,
			};
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
