import UsersActionTypes from './users.types';

export const googleSignInStart = () => ({
	type: UsersActionTypes.GOOGLE_SIGN_IN_START,
});

export const onAuthStateChangedStart = () => ({
	type: UsersActionTypes.USER_LISTENER_START,
});

export const removeAuthListenerStart = () => ({
	type: UsersActionTypes.REMOVE_USER_LISTENER,
});

export const fetchCurrentUserSuccess = user => ({
	type: UsersActionTypes.SIGN_IN_SUCCUSS,
	payload: user,
});

export const fetchCurrentUserFailure = errorMessage => ({
	type: UsersActionTypes.SIGN_IN_FAILURE,
	payload: errorMessage,
});

export const userGoogleLogoutStart = () => ({
	type: UsersActionTypes.SIGN_OUT_START,
});
