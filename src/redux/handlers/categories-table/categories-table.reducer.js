import CategoriesTableActionTypes from './categories-table.types';

const INITIAL_STATE = {
	order: 'asc',
	orderBy: '',
	selected: [],
	filteredCategories: [],
	page: 0,
	dense: false,
	rowsPerPage: 5,
	errorMessage: undefined,
	searchField: '',
};

const categoriesTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Success Process                                                 */
		/* ================================================================ */
		case CategoriesTableActionTypes.SET_ORDER_CATEGORIES_SUCCESS:
			return {
				...state,
				order: action.payload,
			};
		case CategoriesTableActionTypes.SET_CATEGORIES_ORDER_BY:
			return {
				...state,
				orderBy: action.payload,
			};
		case CategoriesTableActionTypes.SET_SELECT_ALL_CATEGORIES_SUCCESS:
		case CategoriesTableActionTypes.SET_SELECT_CATEGORIES_SUCCESS:
			return {
				...state,
				selected: action.payload,
			};
		case CategoriesTableActionTypes.SET_PAGE_CATEGORIES_SUCCESS:
			return {
				...state,
				page: action.payload,
			};
		case CategoriesTableActionTypes.SET_ROWS_PER_PAGE_CATEGORIES_SUCCESS:
			return {
				...state,
				rowsPerPage: action.payload,
			};
		case CategoriesTableActionTypes.SET_CATEGORIES_SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload,
			};
		case CategoriesTableActionTypes.SET_FILTERED_CATEGORIES_SUCCESS:
			return {
				...state,
				filteredCategories: action.payload,
			};
		/* ================================================================ */
		/*  Failure Process                                                 */
		/* ================================================================ */
		case CategoriesTableActionTypes.SET_ORDER_CATEGORIES_FAILURE:
		case CategoriesTableActionTypes.SET_SELECT_ALL_CATEGORIES_FAILURE:
		case CategoriesTableActionTypes.SET_PAGE_CATEGORIES_FAILURE:
		case CategoriesTableActionTypes.SET_ROWS_PER_PAGE_CATEGORIES_FAILURE:
		case CategoriesTableActionTypes.SET_FILTERED_CATEGORIES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Process                                                  */
		/* ================================================================ */
		case CategoriesTableActionTypes.REMOVE_SELECTED_CATEGORIES:
			return {
				...state,
				selected: [],
			};
		case CategoriesTableActionTypes.REMOVE_CATEGORIES_ORDER_BY:
			return {
				...state,
				orderBy: '',
			};
		case CategoriesTableActionTypes.REMOVE_CATEGORIES_SEARCH_FIELD:
			return {
				...state,
				searchField: '',
			};
		default:
			return state;
	}
};

export default categoriesTableReducer;
