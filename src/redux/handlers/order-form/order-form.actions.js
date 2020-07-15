import OrderFormActionTypes from './order-form.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setCategoryOrderForm = categoryId => ({
	type: OrderFormActionTypes.SET_CATEGORY_ORDER_FORM,
	payload: categoryId,
});

export const selectMenuStart = menu => ({
	type: OrderFormActionTypes.SELECT_MENU_START,
	payload: menu,
});

export const setExtraMenuItemStart = props => ({
	type: OrderFormActionTypes.SET_EXTRA_MENU_ITEM_START,
	payload: props,
});

export const removeOrderItemStart = index => ({
	type: OrderFormActionTypes.REMOVE_ORDER_ITEM_START,
	payload: index,
});

/* ================================================================ */
/*  Process Success                                                 */
/* ================================================================ */

export const selectMenuSuccess = selectedMenus => ({
	type: OrderFormActionTypes.SELECT_MENU_SUCCESS,
	payload: selectedMenus,
});

export const setExtraMenuItemSuccess = selectedMenus => ({
	type: OrderFormActionTypes.SET_EXTRA_MENU_ITEM_SUCCESS,
	payload: selectedMenus,
});

export const removeOrderItemSuccess = selectedMenus => ({
	type: OrderFormActionTypes.REMOVE_ORDER_ITEM_SUCCESS,
	payload: selectedMenus,
});

/* ================================================================ */
/*  Process Failure                                                 */
/* ================================================================ */

export const selectMenuFailure = errorMessage => ({
	type: OrderFormActionTypes.SELECT_MENU_FAILURE,
	payload: errorMessage,
});

export const setExtraMenuItemFailure = errorMessage => ({
	type: OrderFormActionTypes.SET_EXTRA_MENU_ITEM_FAILURE,
	payload: errorMessage,
});

export const removeOrderItemFailure = errorMessage => ({
	type: OrderFormActionTypes.REMOVE_ORDER_ITEM_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeOrderForm = () => ({
	type: OrderFormActionTypes.REMOVE_ORDER_FORM,
});
