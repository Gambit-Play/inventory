import CategoryDetailActionTypes from './category-detail.types';

const INITIAL_STATE = {
	// Category Detail
	id: '',
	name: '',
	// Create, Delete and Update confirmation
	isUpdateSuccess: undefined,
	isCreateSuccess: undefined,
	isDeleteSuccess: undefined,
	// Create & Update error message
	errorMessage: '',
	// Input error message
	errorName: '',
	// Checks if category is new or an existing one
	isNew: false,
};

const categoryDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current Category                                                */
		/* ================================================================ */
		case CategoryDetailActionTypes.FETCH_CATEGORY_START:
			return {
				...state,
				isFetching: true,
			};
		case CategoryDetailActionTypes.SET_CATEGORY_START:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case CategoryDetailActionTypes.FETCH_CATEGORY_SUCCESS:
			return {
				...state,
				isFetching: true,

				id: action.payload.id,
				name: action.payload.name,
			};
		/* ================================================================ */
		/*  Create Category                                                 */
		/* ================================================================ */
		case CategoryDetailActionTypes.IS_NEW_CATEGORY:
			return {
				...state,
				isNew: true,
			};
		case CategoryDetailActionTypes.CREATE_CATEGORY_SUCCESS:
			return {
				...state,
				isCreateSuccess: true,
			};
		case CategoryDetailActionTypes.CREATE_CATEGORY_FAILURE:
			return {
				...state,
				isCreateSuccess: false,
				errorMessage: action.payload,
			};
		case CategoryDetailActionTypes.INPUT_CATEGORY_FAILURE:
			return {
				...state,
				[action.payload.errorType]: action.payload.errorMessage,
			};
		/* ================================================================ */
		/*  Update Category                                                 */
		/* ================================================================ */
		case CategoryDetailActionTypes.UPDATE_CATEGORY_SUCCESS:
			return {
				...state,
				isUpdateSuccess: true,
			};
		case CategoryDetailActionTypes.UPDATE_CATEGORY_FAILURE:
			return {
				...state,
				isUpdateSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Delete Category                                                 */
		/* ================================================================ */
		case CategoryDetailActionTypes.DELETE_CATEGORY_SUCCESS:
		case CategoryDetailActionTypes.DELETE_MULTIPLE_CATEGORYS_SUCCESS:
			return {
				...state,
				isDeleteSuccess: true,
			};
		case CategoryDetailActionTypes.DELETE_CATEGORY_FAILURE:
		case CategoryDetailActionTypes.DELETE_MULTIPLE_CATEGORYS_FAILURE:
			return {
				...state,
				isDeleteSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Category                                                 */
		/* ================================================================ */
		case CategoryDetailActionTypes.REMOVE_CATEGORY:
			return {
				...state,
				id: '',
				name: '',
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

export default categoryDetailReducer;
