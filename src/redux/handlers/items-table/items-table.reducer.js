import ItemsTableActionTypes from './items-table.types';

const INITIAL_STATE = {
	order: 'asc',
	orderBy: 'name',
	selected: [],
	page: 0,
	dense: false,
	rowsPerPage: 5,
	errorMessage: undefined,
};

const itemsTableReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemsTableActionTypes.SET_ORDER_SUCCESS:
			return {
				...state,
				order: action.payload,
			};
		case ItemsTableActionTypes.SET_ORDER_BY_SUCCESS:
			return {
				...state,
				orderBy: action.payload,
			};
		case ItemsTableActionTypes.SET_SELECT_ALL_SUCCESS:
			return {
				...state,
				selected: action.payload,
			};
		case ItemsTableActionTypes.SET_ORDER_FAILURE:
		case ItemsTableActionTypes.SET_SELECT_ALL_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default itemsTableReducer;
