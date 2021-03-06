import OrdersTableActionTypes from './orders-table.types';

const INITIAL_STATE = {
	ordersTable: [],
	order: 'asc',
	orderBy: '',
	page: 0,
	dense: false,
	rowsPerPage: 5,
	errorMessage: '',
};

const ordersTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Success Process                                                 */
		/* ================================================================ */
		case OrdersTableActionTypes.FETCH_ORDERS_TABLE_SUCCESS:
			return {
				...state,
				ordersTable: action.payload,
			};
		case OrdersTableActionTypes.SET_ORDERS_ORDER_SUCCESS:
			return {
				...state,
				order: action.payload,
			};
		case OrdersTableActionTypes.SET_ORDERS_ORDER_BY:
			return {
				...state,
				orderBy: action.payload,
			};
		case OrdersTableActionTypes.SET_ORDERS_PAGE_SUCCESS:
			return {
				...state,
				page: action.payload,
			};
		case OrdersTableActionTypes.SET_ORDERS_ROWS_PER_PAGE_SUCCESS:
			return {
				...state,
				rowsPerPage: action.payload,
			};
		/* ================================================================ */
		/*  Failure Process                                                 */
		/* ================================================================ */
		case OrdersTableActionTypes.FETCH_ORDERS_TABLE_FAILURE:
		case OrdersTableActionTypes.SET_ORDERS_ORDER_FAILURE:
		case OrdersTableActionTypes.SET_ORDERS_PAGE_FAILURE:
		case OrdersTableActionTypes.SET_ORDERS_ROWS_PER_PAGE_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		case OrdersTableActionTypes.CLEAR_ORDERS_TABLE:
			return {
				...state,
				ordersTable: [],
				order: 'asc',
				orderBy: '',
				page: 0,
				dense: false,
				rowsPerPage: 5,
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default ordersTableReducer;
