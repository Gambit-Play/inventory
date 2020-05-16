import ItemDetailActionTypes from './item-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchItemStart = itemId => ({
	type: ItemDetailActionTypes.FETCH_ITEM_START,
	payload: itemId,
});

export const setItemStart = (inputName, value) => ({
	type: ItemDetailActionTypes.SET_ITEM_START,
	payload: { inputName, value },
});

export const setUnit = (unitId, unit) => ({
	type: ItemDetailActionTypes.SET_ITEM_UNIT,
	payload: { unitId, unit },
});

export const updateItemStart = () => ({
	type: ItemDetailActionTypes.UPDATE_ITEM_START,
});

export const createItemStart = () => ({
	type: ItemDetailActionTypes.CREATE_ITEM_START,
});

export const deleteItemStart = () => ({
	type: ItemDetailActionTypes.DELETE_ITEM_START,
});

export const deleteMultipleItemsStart = () => ({
	type: ItemDetailActionTypes.DELETE_MULTIPLE_ITEMS_START,
});

export const isNew = () => ({
	type: ItemDetailActionTypes.IS_NEW_ITEM,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchItemSuccess = item => ({
	type: ItemDetailActionTypes.FETCH_ITEM_SUCCESS,
	payload: item,
});

export const updateItemSuccess = () => ({
	type: ItemDetailActionTypes.UPDATE_ITEM_SUCCESS,
});

export const createItemSuccess = () => ({
	type: ItemDetailActionTypes.CREATE_ITEM_SUCCESS,
});

export const deleteItemSuccess = () => ({
	type: ItemDetailActionTypes.DELETE_ITEM_SUCCESS,
});

export const deleteMultipleItemsSuccess = () => ({
	type: ItemDetailActionTypes.DELETE_MULTIPLE_ITEMS_SUCCESS,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchItemFailure = errorMessage => ({
	type: ItemDetailActionTypes.FETCH_ITEM_FAILURE,
	payload: errorMessage,
});

export const updateItemFailure = errorMessage => ({
	type: ItemDetailActionTypes.UPDATE_ITEM_FAILURE,
	payload: errorMessage,
});

export const createItemFailure = errorMessage => ({
	type: ItemDetailActionTypes.CREATE_ITEM_FAILURE,
	payload: errorMessage,
});

export const deleteItemFailure = errorMessage => ({
	type: ItemDetailActionTypes.DELETE_ITEM_FAILURE,
	payload: errorMessage,
});

export const deleteMultipleItemsFailure = errorMessage => ({
	type: ItemDetailActionTypes.DELETE_MULTIPLE_ITEMS_FAILURE,
	payload: errorMessage,
});

export const inputFailure = (errorType, errorMessage) => ({
	type: ItemDetailActionTypes.INPUT_ITEM_FAILURE,
	payload: { errorType, errorMessage },
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeItem = () => ({
	type: ItemDetailActionTypes.REMOVE_ITEM,
});
