import OrderFormActionTypes from './order-form.types';

const INITIAL_STATE = {
	categoryId: '',
};

const orderFormReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Set the category filter                                        	*/
		/* ================================================================ */
		case OrderFormActionTypes.SET_CATEGORY_ORDER_FORM:
			return {
				...state,
				categoryId: action.payload,
			};
		/* ================================================================ */
		/*  Remove order form                                              	*/
		/* ================================================================ */
		case OrderFormActionTypes.REMOVE_ORDER_FORM:
			return {
				...state,
				categoryId: '',
			};

		default:
			return state;
	}
};

export default orderFormReducer;
