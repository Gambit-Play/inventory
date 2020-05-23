import CategoriesActionTypes from './categories.types';

const INITIAL_STATE = {
	currentCategories: null,
	errorMessage: '',
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
			return {
				...state,
				currentCategories: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure                                                 */
		/* ================================================================ */
		case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default categoriesReducer;
