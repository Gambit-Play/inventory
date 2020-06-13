import OrderFormActionTypes from './order-form.types';

const INITIAL_STATE = {
	categoryId: '',
	tableId: '',
	selectedMenus: [],
	selectedOrder: 0,
	errorMessage: '',
};

const orderFormReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case OrderFormActionTypes.SET_CATEGORY_ORDER_FORM:
			return {
				...state,
				categoryId: action.payload,
			};
		case OrderFormActionTypes.SELECT_MENU_SUCCESS:
			return {
				...state,
				selectedMenus: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure		                                        	*/
		/* ================================================================ */
		case OrderFormActionTypes.SELECT_MENU_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Remove                                              	*/
		/* ================================================================ */
		case OrderFormActionTypes.REMOVE_ORDER_FORM:
			return {
				...state,
				categoryId: '',
				selectedMenus: [],
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default orderFormReducer;
