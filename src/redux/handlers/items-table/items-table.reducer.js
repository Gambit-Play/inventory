import ItemsTableActionTypes from './items-table.types';

const INITIAL_STATE = {
	order: 'asc',
	orderBy: '',
	selected: [],
	filteredItems: [],
	page: 0,
	dense: false,
	rowsPerPage: 5,
	errorMessage: undefined,
	searchField: '',
};

const itemsTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Success Process                                                 */
		/* ================================================================ */
		case ItemsTableActionTypes.SET_ORDER_ITEMS_SUCCESS:
			return {
				...state,
				order: action.payload,
			};
		case ItemsTableActionTypes.SET_ITEMS_ORDER_BY:
			return {
				...state,
				orderBy: action.payload,
			};
		case ItemsTableActionTypes.SET_SELECT_ALL_ITEMS_SUCCESS:
		case ItemsTableActionTypes.SET_SELECT_ITEMS_SUCCESS:
			return {
				...state,
				selected: action.payload,
			};
		case ItemsTableActionTypes.SET_PAGE_ITEMS_SUCCESS:
			return {
				...state,
				page: action.payload,
			};
		case ItemsTableActionTypes.SET_ROWS_PER_PAGE_ITEMS_SUCCESS:
			return {
				...state,
				rowsPerPage: action.payload,
			};
		case ItemsTableActionTypes.SET_ITEMS_SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload,
			};
		case ItemsTableActionTypes.SET_FILTERED_ITEMS_SUCCESS:
			return {
				...state,
				filteredItems: action.payload,
			};
		/* ================================================================ */
		/*  Failure Process                                                 */
		/* ================================================================ */
		case ItemsTableActionTypes.SET_ORDER_ITEMS_FAILURE:
		case ItemsTableActionTypes.SET_SELECT_ALL_ITEMS_FAILURE:
		case ItemsTableActionTypes.SET_PAGE_ITEMS_FAILURE:
		case ItemsTableActionTypes.SET_ROWS_PER_PAGE_ITEMS_FAILURE:
		case ItemsTableActionTypes.SET_FILTERED_ITEMS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Process                                                  */
		/* ================================================================ */
		case ItemsTableActionTypes.REMOVE_SELECTED_ITEMS:
			return {
				...state,
				selected: [],
			};
		case ItemsTableActionTypes.REMOVE_ITEMS_ORDER_BY:
			return {
				...state,
				orderBy: '',
			};
		case ItemsTableActionTypes.REMOVE_ITEMS_SEARCH_FIELD:
			return {
				...state,
				searchField: '',
			};
		case ItemsTableActionTypes.CLEAR_ITEMS_TABLE:
			return {
				...state,
				order: 'asc',
				orderBy: '',
				selected: [],
				filteredItems: [],
				page: 0,
				dense: false,
				rowsPerPage: 5,
				errorMessage: undefined,
				searchField: '',
			};
		default:
			return state;
	}
};

export default itemsTableReducer;
