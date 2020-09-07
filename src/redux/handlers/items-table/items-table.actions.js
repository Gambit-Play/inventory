import ItemsTableActionTypes from './items-table.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setOrderStart = order => ({
	type: ItemsTableActionTypes.SET_ORDER_ITEMS_START,
	payload: order,
});

export const setSelectAllStart = checkedAll => ({
	type: ItemsTableActionTypes.SET_SELECT_ALL_ITEMS_START,
	payload: checkedAll,
});

export const setSelectStart = selectedId => ({
	type: ItemsTableActionTypes.SET_SELECT_ITEMS_START,
	payload: selectedId,
});

export const setPageStart = page => ({
	type: ItemsTableActionTypes.SET_PAGE_ITEMS_START,
	payload: page,
});

export const setRowsPerPageStart = rowsPerPage => ({
	type: ItemsTableActionTypes.SET_ROWS_PER_PAGE_ITEMS_START,
	payload: rowsPerPage,
});

export const setSearchFieldStart = search => ({
	type: ItemsTableActionTypes.SET_ITEMS_SEARCH_FIELD,
	payload: search,
});

export const setFilteredItemsStart = () => ({
	type: ItemsTableActionTypes.SET_FILTERED_ITEMS_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const setOrderSuccess = order => ({
	type: ItemsTableActionTypes.SET_ORDER_ITEMS_SUCCESS,
	payload: order,
});

export const setOrderBySuccess = orderBy => ({
	type: ItemsTableActionTypes.SET_ITEMS_ORDER_BY,
	payload: orderBy,
});

export const setSelectAllSuccess = selected => ({
	type: ItemsTableActionTypes.SET_SELECT_ALL_ITEMS_SUCCESS,
	payload: selected,
});

export const setSelectSuccess = selected => ({
	type: ItemsTableActionTypes.SET_SELECT_ITEMS_SUCCESS,
	payload: selected,
});

export const setPageSuccess = page => ({
	type: ItemsTableActionTypes.SET_PAGE_ITEMS_SUCCESS,
	payload: page,
});

export const setRowsPerPageSuccess = rowsPerPage => ({
	type: ItemsTableActionTypes.SET_ROWS_PER_PAGE_ITEMS_SUCCESS,
	payload: rowsPerPage,
});

export const setFilteredItemsSuccess = list => ({
	type: ItemsTableActionTypes.SET_FILTERED_ITEMS_SUCCESS,
	payload: list,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const setOrderFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_ORDER_ITEMS_FAILURE,
	payload: errorMessage,
});

export const setSelectAllFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_SELECT_ALL_ITEMS_FAILURE,
	payload: errorMessage,
});

export const setSelectFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_SELECT_ITEMS_FAILURE,
	payload: errorMessage,
});

export const setPageFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_PAGE_ITEMS_FAILURE,
	payload: errorMessage,
});

export const setRowsPerPageFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_ROWS_PER_PAGE_ITEMS_FAILURE,
	payload: errorMessage,
});

export const setFilteredItemsFailure = errorMessage => ({
	type: ItemsTableActionTypes.SET_FILTERED_ITEMS_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeSelectedItems = () => ({
	type: ItemsTableActionTypes.REMOVE_SELECTED_ITEMS,
});

export const removeItemsOrderBy = () => ({
	type: ItemsTableActionTypes.REMOVE_ITEMS_ORDER_BY,
});

export const removeItemsSearchField = () => ({
	type: ItemsTableActionTypes.REMOVE_ITEMS_SEARCH_FIELD,
});

export const clearItemsTable = () => ({
	type: ItemsTableActionTypes.CLEAR_ITEMS_TABLE,
});
