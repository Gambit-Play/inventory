const OrderFormActionTypes = {
	SELECT_MENU_START: 'SELECT_MENU_START',
	SELECT_MENU_SUCCESS: 'SELECT_MENU_SUCCESS',
	SELECT_MENU_FAILURE: 'SELECT_MENU_FAILURE',

	SET_EXTRA_MENU_ITEM_START: 'SET_EXTRA_MENU_ITEM_START',
	SET_EXTRA_MENU_ITEM_SUCCESS: 'SET_EXTRA_MENU_ITEM_SUCCESS',
	SET_EXTRA_MENU_ITEM_FAILURE: 'SET_EXTRA_MENU_ITEM_FAILURE',

	SET_CATEGORY_ORDER_FORM: 'SET_CATEGORY_ORDER_FORM',

	SET_TOTAL_PRICE: 'SET_TOTAL_PRICE',

	REMOVE_ORDER_ITEM_START: 'REMOVE_ORDER_ITEM_START',
	REMOVE_ORDER_ITEM_SUCCESS: 'REMOVE_ORDER_ITEM_SUCCESS',
	REMOVE_ORDER_ITEM_FAILURE: 'REMOVE_ORDER_ITEM_FAILURE',

	HAS_ERROR_START: 'HAS_ERROR_START',
	HAS_ERROR_SUCCESS: 'HAS_ERROR_SUCCESS',
	HAS_ERROR_FAILURE: 'HAS_ERROR_FAILURE',

	IS_CASH_PAYMENT: 'IS_CASH_PAYMENT',

	IS_CARD_PAYMENT: 'IS_CARD_PAYMENT',

	CANCEL_PAYMENT: 'CANCEL_PAYMENT',

	CLEAR_ORDER_FORM: 'CLEAR_ORDER_FORM',

	CLEAR_CATEGORY_FILTER: 'CLEAR_CATEGORY_FILTER',
};

export default OrderFormActionTypes;
