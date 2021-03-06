import MenusActionTypes from './menus.types';

const INITIAL_STATE = {
	currentMenus: null,
	isFetching: false,
	errorMessage: '',
};

const menusReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current Items                                                   */
		/* ================================================================ */
		case MenusActionTypes.FETCH_MENUS_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		case MenusActionTypes.FETCH_MENUS_COLLECTIONS_UPDATE:
			return {
				...state,
				isFetching: true,
			};
		case MenusActionTypes.FETCH_MENUS_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				currentMenus: action.payload,
			};
		case MenusActionTypes.FETCH_MENUS_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Clear Items                                                     */
		/* ================================================================ */
		case MenusActionTypes.CLEAR_MENUS_COLLECTIONS:
			return {
				...state,
				currentMenus: null,
				isFetching: false,
				errorMessage: '',
			};
		default:
			return state;
	}
};

export default menusReducer;
