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

export const setTableIdStart = tableId => ({
	type: OrderFormActionTypes.SET_TABLE_ID,
	payload: tableId,
});

export const clearOrderItemStart = index => ({
	type: OrderFormActionTypes.REMOVE_ORDER_ITEM_START,
	payload: index,
});

export const hasErrorStart = () => ({
	type: OrderFormActionTypes.HAS_ERROR_START,
});

export const setTotalPrice = totalPrice => ({
	type: OrderFormActionTypes.SET_TOTAL_PRICE,
	payload: totalPrice,
});

export const isCardPaymentStart = () => ({
	type: OrderFormActionTypes.IS_CARD_PAYMENT,
});

export const isCashPaymentStart = () => ({
	type: OrderFormActionTypes.IS_CASH_PAYMENT,
});

export const createOrderStart = () => ({
	type: OrderFormActionTypes.CREATE_ORDER_START,
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

export const hasErrorSuccess = bool => ({
	type: OrderFormActionTypes.HAS_ERROR_SUCCESS,
	payload: bool,
});

export const createOrderSuccess = bool => ({
	type: OrderFormActionTypes.CREATE_ORDER_SUCCESS,
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

export const hasErrorFailure = errorMessage => ({
	type: OrderFormActionTypes.HAS_ERROR_FAILURE,
	payload: errorMessage,
});

export const createOrderFailure = errorMessage => ({
	type: OrderFormActionTypes.CREATE_ORDER_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const clearOrderForm = () => ({
	type: OrderFormActionTypes.CLEAR_ORDER_FORM,
});

export const clearCategoryFilter = () => ({
	type: OrderFormActionTypes.CLEAR_CATEGORY_FILTER,
});

export const clearTableId = () => ({
	type: OrderFormActionTypes.CLEAR_TABLE_ID,
});

export const cancelPayment = () => ({
	type: OrderFormActionTypes.CANCEL_PAYMENT,
});
