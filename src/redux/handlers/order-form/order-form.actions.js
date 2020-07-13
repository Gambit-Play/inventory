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

/* ================================================================ */
/*  Process Success                                                 */
/* ================================================================ */

export const selectMenuSuccess = selectedMenus => ({
	type: OrderFormActionTypes.SELECT_MENU_SUCCESS,
	payload: selectedMenus,
});

/* ================================================================ */
/*  Process Failure                                                 */
/* ================================================================ */

export const selectMenuFailure = errorMessage => ({
	type: OrderFormActionTypes.SELECT_MENU_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeOrderForm = () => ({
	type: OrderFormActionTypes.REMOVE_ORDER_FORM,
});
