import CategoryDetailActionTypes from './category-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchCategoryStart = categoryId => ({
	type: CategoryDetailActionTypes.FETCH_CATEGORY_START,
	payload: categoryId,
});

export const setCategoryStart = (inputName, value) => ({
	type: CategoryDetailActionTypes.SET_CATEGORY_START,
	payload: { inputName, value },
});

export const updateCategoryStart = () => ({
	type: CategoryDetailActionTypes.UPDATE_CATEGORY_START,
});

export const createCategoryStart = () => ({
	type: CategoryDetailActionTypes.CREATE_CATEGORY_START,
});

export const deleteCategoryStart = () => ({
	type: CategoryDetailActionTypes.DELETE_CATEGORY_START,
});

export const deleteMultipleCategoriesStart = () => ({
	type: CategoryDetailActionTypes.DELETE_MULTIPLE_CATEGORYS_START,
});

export const isNew = () => ({
	type: CategoryDetailActionTypes.IS_NEW_CATEGORY,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchCategorySuccess = category => ({
	type: CategoryDetailActionTypes.FETCH_CATEGORY_SUCCESS,
	payload: category,
});

export const updateCategorySuccess = () => ({
	type: CategoryDetailActionTypes.UPDATE_CATEGORY_SUCCESS,
});

export const createCategorySuccess = () => ({
	type: CategoryDetailActionTypes.CREATE_CATEGORY_SUCCESS,
});

export const deleteCategorySuccess = () => ({
	type: CategoryDetailActionTypes.DELETE_CATEGORY_SUCCESS,
});

export const deleteMultipleCategorysSuccess = () => ({
	type: CategoryDetailActionTypes.DELETE_MULTIPLE_CATEGORYS_SUCCESS,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchCategoryFailure = errorMessage => ({
	type: CategoryDetailActionTypes.FETCH_CATEGORY_FAILURE,
	payload: errorMessage,
});

export const updateCategoryFailure = errorMessage => ({
	type: CategoryDetailActionTypes.UPDATE_CATEGORY_FAILURE,
	payload: errorMessage,
});

export const createCategoryFailure = errorMessage => ({
	type: CategoryDetailActionTypes.CREATE_CATEGORY_FAILURE,
	payload: errorMessage,
});

export const deleteCategoryFailure = errorMessage => ({
	type: CategoryDetailActionTypes.DELETE_CATEGORY_FAILURE,
	payload: errorMessage,
});

export const deleteMultipleCategorysFailure = errorMessage => ({
	type: CategoryDetailActionTypes.DELETE_MULTIPLE_CATEGORYS_FAILURE,
	payload: errorMessage,
});

export const inputFailure = (errorType, errorMessage) => ({
	type: CategoryDetailActionTypes.INPUT_CATEGORY_FAILURE,
	payload: { errorType, errorMessage },
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeCategory = () => ({
	type: CategoryDetailActionTypes.REMOVE_CATEGORY,
});
