import CategoriesActionTypes from './categories.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchCategoriesCollectionStart = () => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_START,
});

/* ================================================================ */
/*  Process Update	                                                */
/* ================================================================ */

export const fetchCategoriesCollectionUpdate = () => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_UPDATE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchCategoriesCollectionSuccess = categories => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_SUCCESS,
	payload: categories,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchCategoriesCollectionFailure = errorMessage => ({
	type: CategoriesActionTypes.FETCH_CATEGORIES_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeCategoriesCollectionListener = () => ({
	type: CategoriesActionTypes.REMOVE_CATEGORIES_COLLECTION_LISTENER,
});

export const clearCategoriesStart = () => ({
	type: CategoriesActionTypes.CLEAR_CATEGORIES_COLLECTIONS,
});
