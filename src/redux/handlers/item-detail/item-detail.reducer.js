import ItemDetailActionTypes from './item-detail.types';

const INITIAL_STATE = {
	// Item Detail
	id: '',
	name: '',
	quantity: null,
	unit: '',
	unitName: '',
	price: null,
	createdAt: '',
	createdBy: '',
	createdByName: '',
	updatedAt: '',
	updatedBy: '',
	updatedByName: '',
	// Create, Delete and Update confirmation
	isUpdateSuccess: undefined,
	isCreateSuccess: undefined,
	isDeleteSuccess: undefined,
	// Create & Update error message
	errorMessage: '',
	// Input error message
	errorName: '',
	// Checks if item is new or an existing one
	isNew: false,
};

const itemDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current Item                                                    */
		/* ================================================================ */
		case ItemDetailActionTypes.FETCH_ITEM_START:
			return {
				...state,
				isFetching: true,
			};
		case ItemDetailActionTypes.SET_ITEM_START:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case ItemDetailActionTypes.FETCH_ITEM_SUCCESS:
			return {
				...state,
				isFetching: true,

				id: action.payload.id,
				name: action.payload.name,
				quantity: action.payload.quantity,
				unit: action.payload.unit,
				unitName: action.payload.unitName,
				price: action.payload.price,
				createdAt: action.payload.createdAt,
				createdBy: action.payload.createdBy,
				createdByName: action.payload.createdByName,
				updatedAt: action.payload.updatedAt,
				updatedBy: action.payload.updatedBy,
				updatedByName: action.payload.updatedByName,
			};
		/* ================================================================ */
		/*  Create Item                                                     */
		/* ================================================================ */
		case ItemDetailActionTypes.SET_UNIT:
			return {
				...state,
				unit: action.payload.unit,
				unitName: action.payload.unitName,
			};
		/* ================================================================ */
		/*  Create Item                                                     */
		/* ================================================================ */
		case ItemDetailActionTypes.IS_NEW:
			return {
				...state,
				isNew: true,
			};
		case ItemDetailActionTypes.CREATE_ITEM_SUCCESS:
			return {
				...state,
				isCreateSuccess: true,
			};
		case ItemDetailActionTypes.CREATE_ITEM_FAILURE:
			return {
				...state,
				isCreateSuccess: false,
				errorMessage: action.payload,
			};
		case ItemDetailActionTypes.INPUT_FAILURE:
			return {
				...state,
				[action.payload.errorType]: action.payload.errorMessage,
			};
		/* ================================================================ */
		/*  Update Item                                                     */
		/* ================================================================ */
		case ItemDetailActionTypes.UPDATE_ITEM_SUCCESS:
			return {
				...state,
				isUpdateSuccess: true,
			};
		case ItemDetailActionTypes.UPDATE_ITEM_FAILURE:
			return {
				...state,
				isUpdateSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Delete Item                                                     */
		/* ================================================================ */
		case ItemDetailActionTypes.DELETE_ITEM_SUCCESS:
		case ItemDetailActionTypes.DELETE_MULTIPLE_ITEMS_SUCCESS:
			return {
				...state,
				isDeleteSuccess: true,
			};
		case ItemDetailActionTypes.DELETE_ITEM_FAILURE:
		case ItemDetailActionTypes.DELETE_MULTIPLE_ITEMS_FAILURE:
			return {
				...state,
				isDeleteSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Item                                                     */
		/* ================================================================ */
		case ItemDetailActionTypes.REMOVE_ITEM:
			return {
				...state,
				id: '',
				name: '',
				quantity: null,
				unit: '',
				unitName: '',
				price: null,
				createdAt: '',
				createdBy: '',
				createdByName: '',
				updatedAt: '',
				updatedBy: '',
				updatedByName: '',
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

export default itemDetailReducer;
