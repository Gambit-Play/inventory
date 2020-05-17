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

export const setMenuIngridientsStart = SelectedId => ({
	type: MenuDetailActionTypes.SET_MENU_INGRIDIENTS_START,
	payload: SelectedId,
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

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchMenuSuccess = menu => ({
	type: MenuDetailActionTypes.FETCH_MENU_SUCCESS,
	payload: menu,
});

export const setMenuIngridientsSuccess = SelectedId => ({
	type: MenuDetailActionTypes.SET_MENU_INGRIDIENTS_SUCCESS,
	payload: SelectedId,
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

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchMenuFailure = errorMessage => ({
	type: MenuDetailActionTypes.FETCH_MENU_FAILURE,
	payload: errorMessage,
});

export const setMenuIngridientsFailure = errorMessage => ({
	type: MenuDetailActionTypes.SET_MENU_INGRIDIENTS_FAILURE,
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

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeMenu = () => ({
	type: MenuDetailActionTypes.REMOVE_MENU,
});
