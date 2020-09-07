import MenusTableActionTypes from './menus-table.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setOrderStart = order => ({
	type: MenusTableActionTypes.SET_ORDER_MENUS_START,
	payload: order,
});

export const setSelectAllStart = checkedAll => ({
	type: MenusTableActionTypes.SET_SELECT_ALL_MENUS_START,
	payload: checkedAll,
});

export const setSelectStart = selectedId => ({
	type: MenusTableActionTypes.SET_SELECT_MENUS_START,
	payload: selectedId,
});

export const setPageStart = page => ({
	type: MenusTableActionTypes.SET_PAGE_MENUS_START,
	payload: page,
});

export const setRowsPerPageStart = rowsPerPage => ({
	type: MenusTableActionTypes.SET_ROWS_PER_PAGE_MENUS_START,
	payload: rowsPerPage,
});

export const setSearchFieldStart = search => ({
	type: MenusTableActionTypes.SET_MENUS_SEARCH_FIELD,
	payload: search,
});

export const setFilteredMenusStart = () => ({
	type: MenusTableActionTypes.SET_FILTERED_MENUS_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const setOrderSuccess = order => ({
	type: MenusTableActionTypes.SET_ORDER_MENUS_SUCCESS,
	payload: order,
});

export const setOrderBySuccess = orderBy => ({
	type: MenusTableActionTypes.SET_MENUS_ORDER_BY,
	payload: orderBy,
});

export const setSelectAllSuccess = selected => ({
	type: MenusTableActionTypes.SET_SELECT_ALL_MENUS_SUCCESS,
	payload: selected,
});

export const setSelectSuccess = selected => ({
	type: MenusTableActionTypes.SET_SELECT_MENUS_SUCCESS,
	payload: selected,
});

export const setPageSuccess = page => ({
	type: MenusTableActionTypes.SET_PAGE_MENUS_SUCCESS,
	payload: page,
});

export const setRowsPerPageSuccess = rowsPerPage => ({
	type: MenusTableActionTypes.SET_ROWS_PER_PAGE_MENUS_SUCCESS,
	payload: rowsPerPage,
});

export const setFilteredMenusSuccess = list => ({
	type: MenusTableActionTypes.SET_FILTERED_MENUS_SUCCESS,
	payload: list,
});

/* ================================================================ */
/*  Process Failure	                                                */
/* ================================================================ */

export const setOrderFailure = errorMessage => ({
	type: MenusTableActionTypes.SET_ORDER_MENUS_FAILURE,
	payload: errorMessage,
});

export const setSelectAllFailure = errorMessage => ({
	type: MenusTableActionTypes.SET_SELECT_ALL_MENUS_FAILURE,
	payload: errorMessage,
});

export const setSelectFailure = errorMessage => ({
	type: MenusTableActionTypes.SET_SELECT_MENUS_FAILURE,
	payload: errorMessage,
});

export const setPageFailure = errorMessage => ({
	type: MenusTableActionTypes.SET_PAGE_MENUS_FAILURE,
	payload: errorMessage,
});

export const setRowsPerPageFailure = errorMessage => ({
	type: MenusTableActionTypes.SET_ROWS_PER_PAGE_MENUS_FAILURE,
	payload: errorMessage,
});

export const setFilteredMenusFailure = errorMessage => ({
	type: MenusTableActionTypes.SET_FILTERED_MENUS_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeSelectedMenus = () => ({
	type: MenusTableActionTypes.REMOVE_SELECTED_MENUS,
});

export const removeMenusOrderBy = () => ({
	type: MenusTableActionTypes.REMOVE_MENUS_ORDER_BY,
});

export const removeMenusSearchField = () => ({
	type: MenusTableActionTypes.REMOVE_MENUS_SEARCH_FIELD,
});

export const clearMenusTable = () => ({
	type: MenusTableActionTypes.CLEAR_MENUS_TABLE,
});
