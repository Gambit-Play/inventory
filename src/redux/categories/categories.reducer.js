import CategoriesActionTypes from './categories.types';

const INITIAL_STATE = {
	currentCategories: null,
	isFetching: false,
	errorMessage: '',
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Update                                                  */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_UPDATE:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentCategories: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Clear Categories                                                */
		/* ================================================================ */
		case CategoriesActionTypes.CLEAR_CATEGORIES_COLLECTIONS:
			return {
				...state,
				currentCategories: [],
				isFetching: false,
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default categoriesReducer;
