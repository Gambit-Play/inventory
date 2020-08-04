import OrderFormActionTypes from './order-form.types';

const INITIAL_STATE = {
	categoryId: '',
	tableId: '',
	selectedMenus: [],
	totalPrice: 0,
	selectedOrder: 0,
	errorMessage: '',
	hasError: true,
	typeOfPayment: '',
	isCardPayment: false,
	isCashPayment: false,
};

const orderFormReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Process Success                                                 */
		/* ================================================================ */
		case OrderFormActionTypes.SELECT_MENU_SUCCESS:
		case OrderFormActionTypes.SET_EXTRA_MENU_ITEM_SUCCESS:
		case OrderFormActionTypes.REMOVE_ORDER_ITEM_SUCCESS:
			return {
				...state,
				selectedMenus: action.payload,
			};
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
		case OrderFormActionTypes.SET_TOTAL_PRICE:
			return {
				...state,
				totalPrice: action.payload,
			};
		case OrderFormActionTypes.IS_CARD_PAYMENT:
			return {
				...state,
				isCardPayment: true,
				typeOfPayment: 'card',
			};
		case OrderFormActionTypes.IS_CASH_PAYMENT:
			return {
				...state,
				isCashPayment: true,
				typeOfPayment: 'cash',
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
		case OrderFormActionTypes.CANCEL_PAYMENT:
			return {
				...state,
				typeOfPayment: '',
				isCardPayment: false,
				isCashPayment: false,
			};
		case OrderFormActionTypes.CLEAR_ORDER_FORM:
			return {
				...state,
				categoryId: '',
				tableId: '',
				selectedMenus: [],
				totalPrice: 0,
				selectedOrder: 0,
				errorMessage: '',
				hasError: true,
				typeOfPayment: '',
				isCardPayment: false,
				isCashPayment: false,
			};
		default:
			return state;
	}
};

export default orderFormReducer;
