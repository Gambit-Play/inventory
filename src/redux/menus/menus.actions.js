import MenusActionTypes from './menus.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchMenusCollectionStart = () => ({
	type: MenusActionTypes.FETCH_MENUS_COLLECTIONS_START,
});

/* ================================================================ */
/*  Process Update 	                                                */
/* ================================================================ */

export const fetchMenusCollectionUpdate = () => ({
	type: MenusActionTypes.FETCH_MENUS_COLLECTIONS_UPDATE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchMenusCollectionSuccess = menus => ({
	type: MenusActionTypes.FETCH_MENUS_COLLECTIONS_SUCCESS,
	payload: menus,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const fetchMenusCollectionFailure = errorMessage => ({
	type: MenusActionTypes.FETCH_MENUS_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove 	                                                */
/* ================================================================ */

export const removeMenusCollectionListener = () => ({
	type: MenusActionTypes.REMOVE_MENUS_COLLECTION_LISTENER,
});

export const clearMenusStart = () => ({
	type: MenusActionTypes.CLEAR_MENUS_COLLECTIONS,
});
