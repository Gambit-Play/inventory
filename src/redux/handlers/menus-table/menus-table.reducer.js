import MenusTableActionTypes from './menus-table.types';

const INITIAL_STATE = {
	order: 'asc',
	orderBy: '',
	selected: [],
	filteredMenus: [],
	page: 0,
	dense: false,
	rowsPerPage: 5,
	errorMessage: undefined,
	searchField: '',
};

const menusTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Success Process                                                 */
		/* ================================================================ */
		case MenusTableActionTypes.SET_ORDER_MENUS_SUCCESS:
			return {
				...state,
				order: action.payload,
			};
		case MenusTableActionTypes.SET_MENUS_ORDER_BY:
			return {
				...state,
				orderBy: action.payload,
			};
		case MenusTableActionTypes.SET_SELECT_ALL_MENUS_SUCCESS:
		case MenusTableActionTypes.SET_SELECT_MENUS_SUCCESS:
			return {
				...state,
				selected: action.payload,
			};
		case MenusTableActionTypes.SET_PAGE_MENUS_SUCCESS:
			return {
				...state,
				page: action.payload,
			};
		case MenusTableActionTypes.SET_ROWS_PER_PAGE_MENUS_SUCCESS:
			return {
				...state,
				rowsPerPage: action.payload,
			};
		case MenusTableActionTypes.SET_MENUS_SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload,
			};
		case MenusTableActionTypes.SET_FILTERED_MENUS_SUCCESS:
			return {
				...state,
				filteredMenus: action.payload,
			};
		/* ================================================================ */
		/*  Failure Process                                                 */
		/* ================================================================ */
		case MenusTableActionTypes.SET_ORDER_MENUS_FAILURE:
		case MenusTableActionTypes.SET_SELECT_ALL_MENUS_FAILURE:
		case MenusTableActionTypes.SET_PAGE_MENUS_FAILURE:
		case MenusTableActionTypes.SET_ROWS_PER_PAGE_MENUS_FAILURE:
		case MenusTableActionTypes.SET_FILTERED_MENUS_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Process                                                  */
		/* ================================================================ */
		case MenusTableActionTypes.REMOVE_SELECTED_MENUS:
			return {
				...state,
				selected: [],
			};
		case MenusTableActionTypes.REMOVE_MENUS_ORDER_BY:
			return {
				...state,
				orderBy: '',
			};
		case MenusTableActionTypes.REMOVE_MENUS_SEARCH_FIELD:
			return {
				...state,
				searchField: '',
			};
		case MenusTableActionTypes.CLEAR_MENUS_TABLE:
			return {
				...state,
				order: 'asc',
				orderBy: '',
				selected: [],
				filteredMenus: [],
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

export default menusTableReducer;
