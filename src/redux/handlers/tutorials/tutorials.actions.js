import TutorialsActionTypes from './tutorials.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */

export const setTutorialsType = type => ({
	type: TutorialsActionTypes.SET_TUTORRIAL_TYPE,
	payload: type,
});
