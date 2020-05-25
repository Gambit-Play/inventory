import MenuDetailActionTypes from './menu-detail.types';

const INITIAL_STATE = {
	// Menu Detail
	id: '',
	name: '',
	price: null,
	description: '',
	createdAt: '',
	createdById: '',
	createdBy: '',
	updatedAt: '',
	updatedById: '',
	updatedBy: '',
	itemsId: [],
	categoryId: '',
	category: '',
	selectedItemsId: [],
	// Create, Delete and Update confirmation
	isUpdateSuccess: undefined,
	isCreateSuccess: undefined,
	isDeleteSuccess: undefined,
	// Create & Update error message
	errorMessage: '',
	// Input error message
	errorName: '',
	// Checks if menu is new or an existing one
	isNew: false,
};

const menuDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current Menu                                                    */
		/* ================================================================ */
		case MenuDetailActionTypes.FETCH_MENU_START:
			return {
				...state,
				isFetching: true,
			};
		case MenuDetailActionTypes.SET_MENU_START:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case MenuDetailActionTypes.FETCH_MENU_SUCCESS:
			return {
				...state,
				isFetching: true,

				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.price,
				description: action.payload.description,
				createdAt: action.payload.createdAt,
				createdById: action.payload.createdById,
				createdBy: action.payload.createdBy,
				updatedAt: action.payload.updatedAt,
				updatedById: action.payload.updatedById,
				updatedBy: action.payload.updatedBy,
				itemsId: action.payload.itemsId,
				categoryId: action.payload.categoryId,
				category: action.payload.category,
			};
		/* ================================================================ */
		/*  Create Menu                                                     */
		/* ================================================================ */
		case MenuDetailActionTypes.IS_NEW_MENU:
			return {
				...state,
				isNew: true,
			};
		case MenuDetailActionTypes.CREATE_MENU_SUCCESS:
			return {
				...state,
				isCreateSuccess: true,
			};
		case MenuDetailActionTypes.CREATE_MENU_FAILURE:
			return {
				...state,
				isCreateSuccess: false,
				errorMessage: action.payload,
			};
		case MenuDetailActionTypes.INPUT_MENU_FAILURE:
			return {
				...state,
				[action.payload.errorType]: action.payload.errorMessage,
			};
		/* ================================================================ */
		/*  Update Menu                                                     */
		/* ================================================================ */
		case MenuDetailActionTypes.UPDATE_MENU_SUCCESS:
			return {
				...state,
				isUpdateSuccess: true,
			};
		case MenuDetailActionTypes.UPDATE_MENU_FAILURE:
			return {
				...state,
				isUpdateSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Delete Menu                                                     */
		/* ================================================================ */
		case MenuDetailActionTypes.DELETE_MENU_SUCCESS:
		case MenuDetailActionTypes.DELETE_MULTIPLE_MENUS_SUCCESS:
			return {
				...state,
				isDeleteSuccess: true,
			};
		case MenuDetailActionTypes.DELETE_MENU_FAILURE:
		case MenuDetailActionTypes.DELETE_MULTIPLE_MENUS_FAILURE:
			return {
				...state,
				isDeleteSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Set itemsId                                                  */
		/* ================================================================ */
		case MenuDetailActionTypes.SET_ITEMS_ID_SUCCESS:
			return {
				...state,
				itemsId: action.payload,
			};
		case MenuDetailActionTypes.SET_ITEMS_ID_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Set itemsId.quantity                                            */
		/* ================================================================ */
		case MenuDetailActionTypes.SET_ITEMS_ID_QUANTITY_SUCCESS:
			return {
				...state,
				itemsId: action.payload,
			};
		/* ================================================================ */
		/*  Set Menus Ingridients                                           */
		/* ================================================================ */
		case MenuDetailActionTypes.SET_SELECTED_ITEMS_ID:
			return {
				...state,
				selectedItemsId: action.payload,
			};
		/* ================================================================ */
		/*  Set menu category                                               */
		/* ================================================================ */
		case MenuDetailActionTypes.SET_MENU_CATEGORY:
			return {
				...state,
				categoryId: action.payload.categoryId,
				category: action.payload.category,
			};
		/* ================================================================ */
		/*  Remove Item from itemsId                                        */
		/* ================================================================ */
		case MenuDetailActionTypes.REMOVE_ITEMS_ID_SUCCESS:
			return {
				...state,
				itemsId: action.payload,
			};
		case MenuDetailActionTypes.REMOVE_ITEMS_ID_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Process Remove                                                  */
		/* ================================================================ */
		case MenuDetailActionTypes.REMOVE_SELECTED_ITEMS_ID:
			return {
				...state,
				selectedItemsId: [],
			};
		case MenuDetailActionTypes.REMOVE_MENU:
			return {
				...state,
				id: '',
				name: '',
				price: null,
				description: '',
				createdAt: '',
				createdById: '',
				createdBy: '',
				updatedAt: '',
				updatedById: '',
				updatedBy: '',
				itemsId: [],
				categoryId: '',
				category: '',
				selectedItemsId: [],
				isUpdateSuccess: undefined,
				isCreateSuccess: undefined,
				isDeleteSuccess: undefined,
				errorMessage: '',
				errorName: '',
				isNew: false,
			};
		default:
			return state;
	}
};

export default menuDetailReducer;
