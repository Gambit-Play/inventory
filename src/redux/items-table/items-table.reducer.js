import ItemsTableActionTypes from './items-table.types';

const INITIAL_STATE = {
	order: 'asc',
	orderBy: 'name',
	selected: [],
	page: 0,
	dense: false,
	rowsPerPage: 5,
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
		default:
			return state;
	}
};

export default itemsTableReducer;
