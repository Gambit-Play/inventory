import CategoriesActionTypes from './categories.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchCategoriesStart = () => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchCategoriesSuccess = categories => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
	payload: categories,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchCategoriesFailure = errorMessage => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE,
	payload: errorMessage,
});
