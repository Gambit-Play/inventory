import TablesTableActionTypes from './tables-table.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setOrderStart = order => ({
	type: TablesTableActionTypes.SET_ORDER_TABLES_START,
	payload: order,
});

export const setSelectAllStart = checkedAll => ({
	type: TablesTableActionTypes.SET_SELECT_ALL_TABLES_START,
	payload: checkedAll,
});

export const setSelectStart = selectedId => ({
	type: TablesTableActionTypes.SET_SELECT_TABLES_START,
	payload: selectedId,
});

export const setPageStart = page => ({
	type: TablesTableActionTypes.SET_PAGE_TABLES_START,
	payload: page,
});

export const setRowsPerPageStart = rowsPerPage => ({
	type: TablesTableActionTypes.SET_ROWS_PER_PAGE_TABLES_START,
	payload: rowsPerPage,
});

export const setSearchFieldStart = search => ({
	type: TablesTableActionTypes.SET_TABLES_SEARCH_FIELD,
	payload: search,
});

export const setFilteredTablesStart = () => ({
	type: TablesTableActionTypes.SET_FILTERED_TABLES_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const setOrderSuccess = order => ({
	type: TablesTableActionTypes.SET_ORDER_TABLES_SUCCESS,
	payload: order,
});

export const setOrderBySuccess = orderBy => ({
	type: TablesTableActionTypes.SET_TABLES_ORDER_BY,
	payload: orderBy,
});

export const setSelectAllSuccess = selected => ({
	type: TablesTableActionTypes.SET_SELECT_ALL_TABLES_SUCCESS,
	payload: selected,
});

export const setSelectSuccess = selected => ({
	type: TablesTableActionTypes.SET_SELECT_TABLES_SUCCESS,
	payload: selected,
});

export const setPageSuccess = page => ({
	type: TablesTableActionTypes.SET_PAGE_TABLES_SUCCESS,
	payload: page,
});

export const setRowsPerPageSuccess = rowsPerPage => ({
	type: TablesTableActionTypes.SET_ROWS_PER_PAGE_TABLES_SUCCESS,
	payload: rowsPerPage,
});

export const setFilteredTablesSuccess = list => ({
	type: TablesTableActionTypes.SET_FILTERED_TABLES_SUCCESS,
	payload: list,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const setOrderFailure = errorMessage => ({
	type: TablesTableActionTypes.SET_ORDER_TABLES_FAILURE,
	payload: errorMessage,
});

export const setSelectAllFailure = errorMessage => ({
	type: TablesTableActionTypes.SET_SELECT_ALL_TABLES_FAILURE,
	payload: errorMessage,
});

export const setSelectFailure = errorMessage => ({
	type: TablesTableActionTypes.SET_SELECT_TABLES_FAILURE,
	payload: errorMessage,
});

export const setPageFailure = errorMessage => ({
	type: TablesTableActionTypes.SET_PAGE_TABLES_FAILURE,
	payload: errorMessage,
});

export const setRowsPerPageFailure = errorMessage => ({
	type: TablesTableActionTypes.SET_ROWS_PER_PAGE_TABLES_FAILURE,
	payload: errorMessage,
});

export const setFilteredTablesFailure = errorMessage => ({
	type: TablesTableActionTypes.SET_FILTERED_TABLES_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeSelectedTables = () => ({
	type: TablesTableActionTypes.REMOVE_SELECTED_TABLES,
});

export const removeTablesOrderBy = () => ({
	type: TablesTableActionTypes.REMOVE_TABLES_ORDER_BY,
});

export const removeTablesSearchField = () => ({
	type: TablesTableActionTypes.REMOVE_TABLES_SEARCH_FIELD,
});
