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

export const fetchAllUsersStart = () => ({
	type: UsersActionTypes.FETCH_ALL_USERS_START,
});

export const signUpStart = () => ({
	type: UsersActionTypes.SIGN_UP_START,
});

export const setUserCredential = (inputName, value) => ({
	type: UsersActionTypes.SET_USER_CREDENTIALS,
	payload: { inputName, value },
});

export const setInputErrors = (inputName, value) => ({
	type: UsersActionTypes.SET_INPUT_ERRORS,
	payload: { inputName, value },
});

export const emailSignInStart = () => ({
	type: UsersActionTypes.EMAIL_SIGN_IN_START,
});

export const fetchMainCollectionsStart = () => ({
	type: UsersActionTypes.FETCH_MAIN_COLLECTIONS_START,
});

export const setIsNew = () => ({
	type: UsersActionTypes.SET_IS_NEW_USER,
});

/* ================================================================ */
/*  Process Success	                                                */
/* ================================================================ */

export const fetchCurrentUserSuccess = user => ({
	type: UsersActionTypes.SIGN_IN_SUCCUSS,
	payload: user,
});

export const fetchAllUsersSuccess = users => ({
	type: UsersActionTypes.FETCH_ALL_USERS_SUCCESS,
	payload: users,
});

export const signUpSuccess = ({ user, additionalData }) => ({
	type: UsersActionTypes.SIGN_UP_SUCCESS,
	payload: { user, additionalData },
});

export const emailSignInSuccess = () => ({
	type: UsersActionTypes.EMAIL_SIGN_IN_SUCCESS,
});

export const fetchMainCollectionsSuccess = () => ({
	type: UsersActionTypes.FETCH_MAIN_COLLECTIONS_SUCCESS,
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

export const fetchAllUsersFailure = errorMessage => ({
	type: UsersActionTypes.FETCH_ALL_USERS_FAILURE,
	payload: errorMessage,
});

export const fetchMainCollectionsFailure = errorMessage => ({
	type: UsersActionTypes.FETCH_MAIN_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

export const signUpFailure = (inputName, value) => ({
	type: UsersActionTypes.SIGN_UP_FAILURE,
	payload: { inputName, value },
});

/* ================================================================ */
/*  Process Remove                                                  */
/* ================================================================ */

export const removeAuthListenerStart = () => ({
	type: UsersActionTypes.REMOVE_USERS_LISTENER,
});

export const removeTablesDataStart = () => ({
	type: UsersActionTypes.REMOVE_TABLES_DATA,
});

export const clearInputErrors = () => ({
	type: UsersActionTypes.CLEAR_INPUT_ERRORS,
});

export const clearUserCredentials = () => ({
	type: UsersActionTypes.CLEAR_USER_CREDENTIALS,
});

export const removeAllListeners = () => ({
	type: UsersActionTypes.REMOVE_ALL_LISTENERS,
});
