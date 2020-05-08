import ItemDetailActionTypes from './item-detail.types';

const INITIAL_STATE = {
	id: '',
	name: '',
	quantity: null,
	unit: '',
	price: null,
	createdAt: '',
	createdBy: '',

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
		case ItemDetailActionTypes.FETCH_ITEM_START:
			return {
				...state,
				isFetching: true,
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
			};
		case ItemDetailActionTypes.SET_ITEM_START:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
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
				error: {
					name: '',
					price: '',
					quantity: '',
					unit: '',
				},
			};
		default:
			return state;
	}
};

export default itemDetailReducer;
