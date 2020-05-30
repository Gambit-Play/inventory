import TableDetailActionTypes from './table-detail.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchTableStart = tableId => ({
	type: TableDetailActionTypes.FETCH_TABLE_START,
	payload: tableId,
});

export const setTableStart = (inputName, value) => ({
	type: TableDetailActionTypes.SET_TABLE_START,
	payload: { inputName, value },
});

export const updateTableStart = () => ({
	type: TableDetailActionTypes.UPDATE_TABLE_START,
});

export const createTableStart = () => ({
	type: TableDetailActionTypes.CREATE_TABLE_START,
});

export const deleteTableStart = () => ({
	type: TableDetailActionTypes.DELETE_TABLE_START,
});

export const deleteMultipleTablesStart = () => ({
	type: TableDetailActionTypes.DELETE_MULTIPLE_TABLES_START,
});

export const isNew = () => ({
	type: TableDetailActionTypes.IS_NEW_TABLE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchTableSuccess = table => ({
	type: TableDetailActionTypes.FETCH_TABLE_SUCCESS,
	payload: table,
});

export const updateTableSuccess = () => ({
	type: TableDetailActionTypes.UPDATE_TABLE_SUCCESS,
});

export const createTableSuccess = () => ({
	type: TableDetailActionTypes.CREATE_TABLE_SUCCESS,
});

export const deleteTableSuccess = () => ({
	type: TableDetailActionTypes.DELETE_TABLE_SUCCESS,
});

export const deleteMultipleTablesSuccess = () => ({
	type: TableDetailActionTypes.DELETE_MULTIPLE_TABLES_SUCCESS,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchTableFailure = errorMessage => ({
	type: TableDetailActionTypes.FETCH_TABLE_FAILURE,
	payload: errorMessage,
});

export const updateTableFailure = errorMessage => ({
	type: TableDetailActionTypes.UPDATE_TABLE_FAILURE,
	payload: errorMessage,
});

export const createTableFailure = errorMessage => ({
	type: TableDetailActionTypes.CREATE_TABLE_FAILURE,
	payload: errorMessage,
});

export const deleteTableFailure = errorMessage => ({
	type: TableDetailActionTypes.DELETE_TABLE_FAILURE,
	payload: errorMessage,
});

export const deleteMultipleTablesFailure = errorMessage => ({
	type: TableDetailActionTypes.DELETE_MULTIPLE_TABLES_FAILURE,
	payload: errorMessage,
});

export const inputFailure = (errorType, errorMessage) => ({
	type: TableDetailActionTypes.INPUT_TABLE_FAILURE,
	payload: { errorType, errorMessage },
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeTable = () => ({
	type: TableDetailActionTypes.REMOVE_TABLE,
});
