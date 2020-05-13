import ItemsTableActionTypes from './items-table.types';

const INITIAL_STATE = {
	order: 'asc',
	orderBy: '',
	selected: [],
	page: 0,
	dense: false,
	rowsPerPage: 5,
	errorMessage: undefined,
};

const itemsTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Success Process                                                 */
		/* ================================================================ */
		case ItemsTableActionTypes.SET_ORDER_SUCCESS:
			return {
				...state,
				order: action.payload,
			};
		case ItemsTableActionTypes.SET_ORDER_BY_SUCCESS:
			return {
				...state,
				orderBy: action.payload,
			};
		case ItemsTableActionTypes.SET_SELECT_ALL_SUCCESS:
		case ItemsTableActionTypes.SET_SELECT_SUCCESS:
			return {
				...state,
				selected: action.payload,
			};
		case ItemsTableActionTypes.SET_PAGE_SUCCESS:
			return {
				...state,
				page: action.payload,
			};
		case ItemsTableActionTypes.SET_ROWS_PER_PAGE_SUCCESS:
			return {
				...state,
				rowsPerPage: action.payload,
			};
		/* ================================================================ */
		/*  Failure Process                                                 */
		/* ================================================================ */
		case ItemsTableActionTypes.SET_ORDER_FAILURE:
		case ItemsTableActionTypes.SET_SELECT_ALL_FAILURE:
		case ItemsTableActionTypes.SET_PAGE_FAILURE:
		case ItemsTableActionTypes.SET_ROWS_PER_PAGE_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Process                                                  */
		/* ================================================================ */
		case ItemsTableActionTypes.REMOVE_SELECTED:
			return {
				...state,
				selected: [],
			};
		case ItemsTableActionTypes.REMOVE_ORDER_BY:
			return {
				...state,
				orderBy: '',
			};
		default:
			return state;
	}
};

export default itemsTableReducer;
