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
		case CategoriesActionTypes.FETCH_CATEGORIES_START:
			return {
				...state,
				isFetching: true,
			};
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentCategories: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default categoriesReducer;
