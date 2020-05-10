import ItemDetailActionTypes from './item-detail.types';

const INITIAL_STATE = {
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
	isSaveSuccess: false,

	errorMessage: '',
	error: {
		name: '',
		price: '',
		quantity: '',
		unit: '',
	},

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
				isSaveSuccess: true,
			};
		case ItemDetailActionTypes.CREATE_ITEM_FAILURE:
			return {
				...state,
				isSaveSuccess: false,
				errorMessage: action.payload,
			};
		case ItemDetailActionTypes.INPUT_FAILURE:
			return {
				...state,
				error: {
					[action.payload.errorType]: action.payload.errorMessage,
				},
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
				isSaveSuccess: false,
				errorMessage: '',
				error: {
					name: '',
					price: '',
					quantity: '',
					unit: '',
				},
				isNew: false,
			};
		default:
			return state;
	}
};

export default itemDetailReducer;
