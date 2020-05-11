import ItemDetailActionTypes from './item-detail.types';

const INITIAL_STATE = {
	// Item Detail
	id: '',
	name: '',
	quantity: null,
	unit: '',
	price: null,
	createdAt: '',
	createdBy: '',
	createdById: '',
	updatedAt: '',
	updatedBy: '',
	updatedById: '',
	// Create & Update confirmation
	isUpdateSuccess: false,
	isCreateSuccess: false,
	isDeleteSuccess: false,
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
				price: action.payload.price,
				createdAt: action.payload.createdAt,
				createdBy: action.payload.createdBy,
				createdById: action.payload.createdById,
				updatedAt: action.payload.updatedAt,
				updatedBy: action.payload.updatedBy,
				updatedById: action.payload.updatedById,
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
		/*  Update Item                                                     */
		/* ================================================================ */
		case ItemDetailActionTypes.DELETE_ITEM_SUCCESS:
			return {
				...state,
				isDeleteSuccess: true,
			};
		case ItemDetailActionTypes.DELETE_ITEM_FAILURE:
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
				price: null,
				createdAt: '',
				createdBy: '',
				createdById: '',
				updatedAt: '',
				updatedBy: '',
				updatedById: '',
				isUpdateSuccess: false,
				isCreateSuccess: false,
				isDeleteSuccess: false,
				errorMessage: '',
				errorName: '',
				isNew: false,
			};
		default:
			return state;
	}
};

export default itemDetailReducer;
