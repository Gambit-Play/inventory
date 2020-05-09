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

export const updateItemStart = () => ({
	type: ItemDetailActionTypes.UPDATE_ITEM_START,
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

/* ================================================================ */
/*  Process Remove Start                                            */
/* ================================================================ */

export const removeItem = () => ({
	type: ItemDetailActionTypes.REMOVE_ITEM,
});
