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
				id: action.payload.item.id,
				name: action.payload.item.name,
				quantity: action.payload.item.quantity,
				unit: action.payload.item.unit,
				price: action.payload.item.price,
				createdAt: action.payload.item.createdAt,
				createdBy: action.payload.item.createdBy,
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
