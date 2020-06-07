import OrderFormActionTypes from './order-form.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setCategoryOrderForm = categoryId => ({
	type: OrderFormActionTypes.SET_CATEGORY_ORDER_FORM,
	payload: categoryId,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeOrderForm = () => ({
	type: OrderFormActionTypes.REMOVE_ORDER_FORM,
});
