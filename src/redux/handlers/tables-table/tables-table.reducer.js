import TablesTableActionTypes from './tables-table.types';

const INITIAL_STATE = {
	order: 'asc',
	orderBy: '',
	selected: [],
	filteredTables: [],
	page: 0,
	dense: false,
	rowsPerPage: 5,
	errorMessage: undefined,
	searchField: '',
};

const tablesTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Success Process                                                 */
		/* ================================================================ */
		case TablesTableActionTypes.SET_ORDER_TABLES_SUCCESS:
			return {
				...state,
				order: action.payload,
			};
		case TablesTableActionTypes.SET_TABLES_ORDER_BY:
			return {
				...state,
				orderBy: action.payload,
			};
		case TablesTableActionTypes.SET_SELECT_ALL_TABLES_SUCCESS:
		case TablesTableActionTypes.SET_SELECT_TABLES_SUCCESS:
			return {
				...state,
				selected: action.payload,
			};
		case TablesTableActionTypes.SET_PAGE_TABLES_SUCCESS:
			return {
				...state,
				page: action.payload,
			};
		case TablesTableActionTypes.SET_ROWS_PER_PAGE_TABLES_SUCCESS:
			return {
				...state,
				rowsPerPage: action.payload,
			};
		case TablesTableActionTypes.SET_TABLES_SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload,
			};
		case TablesTableActionTypes.SET_FILTERED_TABLES_SUCCESS:
			return {
				...state,
				filteredTables: action.payload,
			};
		/* ================================================================ */
		/*  Failure Process                                                 */
		/* ================================================================ */
		case TablesTableActionTypes.SET_ORDER_TABLES_FAILURE:
		case TablesTableActionTypes.SET_SELECT_ALL_TABLES_FAILURE:
		case TablesTableActionTypes.SET_PAGE_TABLES_FAILURE:
		case TablesTableActionTypes.SET_ROWS_PER_PAGE_TABLES_FAILURE:
		case TablesTableActionTypes.SET_FILTERED_TABLES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Process                                                  */
		/* ================================================================ */
		case TablesTableActionTypes.REMOVE_SELECTED_TABLES:
			return {
				...state,
				selected: [],
			};
		case TablesTableActionTypes.REMOVE_TABLES_ORDER_BY:
			return {
				...state,
				orderBy: '',
			};
		case TablesTableActionTypes.REMOVE_TABLES_SEARCH_FIELD:
			return {
				...state,
				searchField: '',
			};
		case TablesTableActionTypes.CLEAR_TABLES_TABLE:
			return {
				...state,
				order: 'asc',
				orderBy: '',
				selected: [],
				filteredTables: [],
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

export default tablesTableReducer;
