import ItemsTableActionTypes from './items-table.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setOrderStart = order => ({
	type: ItemsTableActionTypes.SET_ORDER_START,
	payload: order,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const setOrderSuccess = order => ({
	type: ItemsTableActionTypes.SET_ORDER_SUCCESS,
	payload: order,
});

export const setOrderBySuccess = orderBy => ({
	type: ItemsTableActionTypes.SET_ORDER_BY_SUCCESS,
	payload: orderBy,
});
