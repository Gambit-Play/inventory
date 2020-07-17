import OrderFormActionTypes from './order-form.types';

const INITIAL_STATE = {
	categoryId: '',
	tableId: '',
	selectedMenus: [],
	selectedOrder: 0,
	errorMessage: '',
	hasError: true,
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
		case OrderFormActionTypes.HAS_ERROR_SUCCESS:
			return {
				...state,
				hasError: action.payload,
			};
		case OrderFormActionTypes.SELECT_MENU_SUCCESS:
		case OrderFormActionTypes.SET_EXTRA_MENU_ITEM_SUCCESS:
		case OrderFormActionTypes.REMOVE_ORDER_ITEM_SUCCESS:
			return {
				...state,
				selectedMenus: action.payload,
			};
		/* ================================================================ */
		/*  Process Failure		                                        	*/
		/* ================================================================ */
		case OrderFormActionTypes.SELECT_MENU_FAILURE:
		case OrderFormActionTypes.SET_EXTRA_MENU_ITEM_FAILURE:
		case OrderFormActionTypes.REMOVE_ORDER_ITEM_FAILURE:
		case OrderFormActionTypes.HAS_ERROR_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Remove                                              	*/
		/* ================================================================ */
		case OrderFormActionTypes.CLEAR_CATEGORY_FILTER:
			return {
				...state,
				categoryId: '',
			};
		case OrderFormActionTypes.CLEAR_ORDER_FORM:
			return {
				...state,
				categoryId: '',
				tableId: '',
				selectedMenus: [],
				selectedOrder: 0,
				errorMessage: '',
				hasError: true,
			};
		default:
			return state;
	}
};

export default orderFormReducer;
