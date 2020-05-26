import TablesActionTypes from './tables.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchTablesCollectionStart = () => ({
	type: TablesActionTypes.FETCH_TABLES_COLLECTIONS_START,
});

/* ================================================================ */
/*  Process Update	                                                */
/* ================================================================ */

export const fetchTablesCollectionUpdate = () => ({
	type: TablesActionTypes.FETCH_TABLES_COLLECTIONS_UPDATE,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchTablesCollectionSuccess = tables => ({
	type: TablesActionTypes.FETCH_TABLES_COLLECTIONS_SUCCESS,
	payload: tables,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchTablesCollectionFailure = errorMessage => ({
	type: TablesActionTypes.FETCH_TABLES_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeTablesCollectionListener = () => ({
	type: TablesActionTypes.REMOVE_TABLES_COLLECTION_LISTENER,
});

export const clearTablesStart = () => ({
	type: TablesActionTypes.CLEAR_TABLES_COLLECTIONS,
});
