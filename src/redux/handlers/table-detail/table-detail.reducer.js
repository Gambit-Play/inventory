import TableDetailActionTypes from './table-detail.types';

const INITIAL_STATE = {
	// Table Detail
	id: '',
	name: '',
	createdAt: '',
	createdById: '',
	createdBy: '',
	updatedAt: '',
	updatedById: '',
	updatedBy: '',
	// Create, Delete and Update confirmation
	isUpdateSuccess: undefined,
	isCreateSuccess: undefined,
	isDeleteSuccess: undefined,
	// Create & Update error message
	errorMessage: '',
	// Input error message
	errorName: '',
	// Checks if table is new or an existing one
	isNew: false,
};

const tableDetailReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current Table                                                	*/
		/* ================================================================ */
		case TableDetailActionTypes.FETCH_TABLE_START:
			return {
				...state,
				isFetching: true,
			};
		case TableDetailActionTypes.SET_TABLE_START:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case TableDetailActionTypes.FETCH_TABLE_SUCCESS:
			return {
				...state,
				isFetching: true,

				id: action.payload.id,
				name: action.payload.name,
				createdAt: action.payload.createdAt,
				createdById: action.payload.createdById,
				createdBy: action.payload.createdBy,
				updatedAt: action.payload.updatedAt,
				updatedById: action.payload.updatedById,
				updatedBy: action.payload.updatedBy,
			};
		/* ================================================================ */
		/*  Create Table                                                 	*/
		/* ================================================================ */
		case TableDetailActionTypes.IS_NEW_TABLE:
			return {
				...state,
				isNew: true,
			};
		case TableDetailActionTypes.CREATE_TABLE_SUCCESS:
			return {
				...state,
				isCreateSuccess: true,
			};
		case TableDetailActionTypes.CREATE_TABLE_FAILURE:
			return {
				...state,
				isCreateSuccess: false,
				errorMessage: action.payload,
			};
		case TableDetailActionTypes.INPUT_TABLE_FAILURE:
			return {
				...state,
				[action.payload.errorType]: action.payload.errorMessage,
			};
		/* ================================================================ */
		/*  Update Table                                                 	*/
		/* ================================================================ */
		case TableDetailActionTypes.UPDATE_TABLE_SUCCESS:
			return {
				...state,
				isUpdateSuccess: true,
			};
		case TableDetailActionTypes.UPDATE_TABLE_FAILURE:
			return {
				...state,
				isUpdateSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Delete Table                                                 	*/
		/* ================================================================ */
		case TableDetailActionTypes.DELETE_TABLE_SUCCESS:
		case TableDetailActionTypes.DELETE_MULTIPLE_TABLES_SUCCESS:
			return {
				...state,
				isDeleteSuccess: true,
			};
		case TableDetailActionTypes.DELETE_TABLE_FAILURE:
		case TableDetailActionTypes.DELETE_MULTIPLE_TABLES_FAILURE:
			return {
				...state,
				isDeleteSuccess: false,
				errorMessage: action.payload,
			};
		/* ================================================================ */
		/*  Remove Table                                                 	*/
		/* ================================================================ */
		case TableDetailActionTypes.REMOVE_TABLE:
			return {
				...state,
				id: '',
				name: '',
				createdAt: '',
				createdById: '',
				createdBy: '',
				updatedAt: '',
				updatedById: '',
				updatedBy: '',
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

export default tableDetailReducer;
