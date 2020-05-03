import UsersActionTypes from './users.types';

/* ================================================================ */
/*  Process Start  	                                                */
/* ================================================================ */
export const googleSignInStart = () => ({
	type: UsersActionTypes.GOOGLE_SIGN_IN_START,
});

export const onAuthStateChangedStart = () => ({
	type: UsersActionTypes.AUTH_LISTENER_START,
});

export const googleLogoutStart = () => ({
	type: UsersActionTypes.SIGN_OUT_START,
});
/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchCurrentUserSuccess = user => ({
	type: UsersActionTypes.SIGN_IN_SUCCUSS,
	payload: user,
});

/* ================================================================ */
/*  Process Failure	       	                                        */
/* ================================================================ */

export const signInFailure = errorMessage => ({
	type: UsersActionTypes.SIGN_IN_FAILURE,
	payload: errorMessage,
});

export const signOutFailure = errorMessage => ({
	type: UsersActionTypes.SIGN_OUT_FAILURE,
	payload: errorMessage,
});

export const onAuthStateChangeFailure = errorMessage => ({
	type: UsersActionTypes.AUTH_LISTENER_FAILURE,
	payload: errorMessage,
});

/* ================================================================ */
/*  Process Remove Start                                            */
/* ================================================================ */

export const removeAuthListenerStart = () => ({
	type: UsersActionTypes.REMOVE_USER_LISTENER,
});
