import ItemsActionTypes from './items.types';

const INITIAL_STATE = {
	currentItems: [],
	isFetching: false,
	errorMessage: '',
};

const itemsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current Items                                                   */
		/* ================================================================ */
		case ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		case ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_UPDATE:
			return {
				...state,
				isFetching: true,
			};
		case ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentItems: action.payload,
			};
		case ItemsActionTypes.FETCH_ITEMS_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Clear Items                                                     */
		/* ================================================================ */
		case ItemsActionTypes.CLEAR_ITEMS_COLLECTIONS:
			return {
				...state,
				currentItems: [],
				isFetching: false,
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default itemsReducer;
