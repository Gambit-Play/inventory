import ItemDetailActionTypes from './item-detail.types';

const INITIAL_STATE = {
	item: {
		id: '',
		name: '',
		quantity: null,
		unit: '',
		price: null,
		createdAt: '',
		createdBy: '',
	},
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
				item: {
					id: action.payload.id,
					name: action.payload.name,
					quantity: action.payload.quantity,
					unit: action.payload.unit,
					price: action.payload.price,
					createdAt: action.payload.createdAt,
					createdBy: action.payload.createdBy,
				},
			};
		case ItemDetailActionTypes.REMOVE_ITEM:
			return {
				...state,
				item: {
					id: '',
					name: '',
					quantity: null,
					unit: '',
					price: null,
					createdAt: '',
					createdBy: '',
				},
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
