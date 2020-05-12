import UnitsActionTypes from './units.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const fetchUnitsStart = () => ({
	type: UnitsActionTypes.FETCH_UNITS_START,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchUnitsSuccess = units => ({
	type: UnitsActionTypes.FETCH_UNITS_SUCCESS,
	payload: units,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const fetchUnitsFailure = errorMessage => ({
	type: UnitsActionTypes.FETCH_UNITS_FAILURE,
	payload: errorMessage,
});
