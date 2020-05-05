import ItemsActionTypes from './items.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchItemsCollectionStart = () => ({
	type: ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_START,
});

/* ================================================================ */
/*  Process Update	                                                */
/* ================================================================ */

export const fetchItemsCollectionUpdate = () => ({
	type: ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_UPDATE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchItemsCollectionSuccess = items => ({
	type: ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_SUCCESS,
	payload: items,
});

export const convertItemsWithUsersSuccess = items => ({
	type: ItemsActionTypes.CONVERT_ITEMS_WITH_USERS_SUCCESS,
	payload: items,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchItemsCollectionFailure = errorMessage => ({
	type: ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_SUCCESS,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove Start                                            */
/* ================================================================ */

export const removeItemsCollectionListener = () => ({
	type: ItemsActionTypes.REMOVE_ITEMS_COLLECTION_LISTENER,
});

export const clearItemsStart = () => ({
	type: ItemsActionTypes.CLEAR_ITEMS_COLLECTIONS,
});
