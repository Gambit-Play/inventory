import MenuDetailActionTypes from './menu-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchMenuStart = menuId => ({
	type: MenuDetailActionTypes.FETCH_MENU_START,
	payload: menuId,
});

export const setMenuStart = (inputName, value) => ({
	type: MenuDetailActionTypes.SET_MENU_START,
	payload: { inputName, value },
});

export const setCategory = (categoryId, category) => ({
	type: MenuDetailActionTypes.SET_MENU_CATEGORY,
	payload: { categoryId, category },
});

export const setItemsIdQuantityStart = (index, quantity) => ({
	type: MenuDetailActionTypes.SET_ITEMS_ID_QUANTITY_START,
	payload: { index, quantity },
});

export const setSelectedItemsIdStart = selectedId => ({
	type: MenuDetailActionTypes.SET_SELECTED_ITEMS_ID,
	payload: selectedId,
});

export const setSelectedExtraMenuItems = extraMenuItemsId => ({
	type: MenuDetailActionTypes.SET_SELECTED_EXTRA_MENU_ITEMS,
	payload: extraMenuItemsId,
});

export const setExtraMenuItemsIdStart = extraMenuItemsId => ({
	type: MenuDetailActionTypes.SET_EXTRA_MENU_ITEMS_ID_START,
	payload: extraMenuItemsId,
});

export const setItemsIdStart = () => ({
	type: MenuDetailActionTypes.SET_ITEMS_ID_START,
});

export const updateMenuStart = () => ({
	type: MenuDetailActionTypes.UPDATE_MENU_START,
});

export const createMenuStart = () => ({
	type: MenuDetailActionTypes.CREATE_MENU_START,
});

export const deleteMenuStart = () => ({
	type: MenuDetailActionTypes.DELETE_MENU_START,
});

export const deleteMultipleMenusStart = () => ({
	type: MenuDetailActionTypes.DELETE_MULTIPLE_MENUS_START,
});

export const isNew = () => ({
	type: MenuDetailActionTypes.IS_NEW_MENU,
});

export const removeItemsIdStart = itemId => ({
	type: MenuDetailActionTypes.REMOVE_ITEMS_ID_START,
	payload: itemId,
});

export const removeExtraMenuItemIdStart = extraMenuItemId => ({
	type: MenuDetailActionTypes.REMOVE_EXTRA_MENU_ITEM_ID_START,
	payload: extraMenuItemId,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchMenuSuccess = menu => ({
	type: MenuDetailActionTypes.FETCH_MENU_SUCCESS,
	payload: menu,
});

export const setItemsIdSuccess = itemsId => ({
	type: MenuDetailActionTypes.SET_ITEMS_ID_SUCCESS,
	payload: itemsId,
});

export const setItemsIdQuantitySuccess = newItemsId => ({
	type: MenuDetailActionTypes.SET_ITEMS_ID_QUANTITY_SUCCESS,
	payload: newItemsId,
});

export const setExtraMenuItemsIdSuccess = extraMenuItemsId => ({
	type: MenuDetailActionTypes.SET_EXTRA_MENU_ITEMS_ID_SUCCESS,
	payload: extraMenuItemsId,
});

export const updateMenuSuccess = () => ({
	type: MenuDetailActionTypes.UPDATE_MENU_SUCCESS,
});

export const createMenuSuccess = () => ({
	type: MenuDetailActionTypes.CREATE_MENU_SUCCESS,
});

export const deleteMenuSuccess = () => ({
	type: MenuDetailActionTypes.DELETE_MENU_SUCCESS,
});

export const deleteMultipleMenusSuccess = () => ({
	type: MenuDetailActionTypes.DELETE_MULTIPLE_MENUS_SUCCESS,
});

export const removeItemsIdSuccess = itemsId => ({
	type: MenuDetailActionTypes.REMOVE_ITEMS_ID_SUCCESS,
	payload: itemsId,
});

export const removeExtraMenuItemIdSuccess = extraMenuItemId => ({
	type: MenuDetailActionTypes.REMOVE_EXTRA_MENU_ITEM_ID_SUCCESS,
	payload: extraMenuItemId,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchMenuFailure = errorMessage => ({
	type: MenuDetailActionTypes.FETCH_MENU_FAILURE,
	payload: errorMessage,
});

export const setItemsIdFailure = errorMessage => ({
	type: MenuDetailActionTypes.SET_ITEMS_ID_FAILURE,
	payload: errorMessage,
});

export const setItemsIdQuantityFailure = errorMessage => ({
	type: MenuDetailActionTypes.SET_ITEMS_ID_QUANTITY_FAILURE,
	payload: errorMessage,
});

export const setExtraMenuItemsIdFailure = errorMessage => ({
	type: MenuDetailActionTypes.SET_EXTRA_MENU_ITEMS_ID_FAILURE,
	payload: errorMessage,
});

export const updateMenuFailure = errorMessage => ({
	type: MenuDetailActionTypes.UPDATE_MENU_FAILURE,
	payload: errorMessage,
});

export const createMenuFailure = errorMessage => ({
	type: MenuDetailActionTypes.CREATE_MENU_FAILURE,
	payload: errorMessage,
});

export const deleteMenuFailure = errorMessage => ({
	type: MenuDetailActionTypes.DELETE_MENU_FAILURE,
	payload: errorMessage,
});

export const deleteMultipleMenusFailure = errorMessage => ({
	type: MenuDetailActionTypes.DELETE_MULTIPLE_MENUS_FAILURE,
	payload: errorMessage,
});

export const inputFailure = (errorType, errorMessage) => ({
	type: MenuDetailActionTypes.INPUT_MENU_FAILURE,
	payload: { errorType, errorMessage },
});

export const removeItemsIdFailure = errorMessage => ({
	type: MenuDetailActionTypes.REMOVE_ITEMS_ID_FAILURE,
	payload: errorMessage,
});

export const removeExtraMenuItemIdFailure = errorMessage => ({
	type: MenuDetailActionTypes.REMOVE_EXTRA_MENU_ITEM_ID_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeMenu = () => ({
	type: MenuDetailActionTypes.REMOVE_MENU,
});

export const removeSelectedItemsId = () => ({
	type: MenuDetailActionTypes.REMOVE_SELECTED_ITEMS_ID,
});

export const removeSelectedExtraMenuItems = () => ({
	type: MenuDetailActionTypes.REMOVE_SELECTED_EXTRA_MENU_ITEMS,
});
