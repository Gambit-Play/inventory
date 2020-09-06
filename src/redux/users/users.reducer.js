import UsersActionTypes from './users.types';

const INITIAL_STATE = {
	currentUser: null,
	allUsers: null,
	isFetching: false,
	errors: {
		currentUser: undefined,
		allUsers: undefined,
		onAuthStateChange: undefined,
	},

	// Login & signup
	isNewUser: false,
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',

	// Errors
	errorDisplayName: '',
	errorEmail: '',
	errorPassword: '',
	errorConfirmPassword: '',
};

const usersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		/* ================================================================ */
		/*  Current User                                                    */
		/* ================================================================ */
		case UsersActionTypes.GOOGLE_SIGN_IN_START:
			return {
				...state,
				isFetching: true,
			};
		case UsersActionTypes.SIGN_IN_SUCCUSS:
			return {
				...state,
				isFetching: false,
				currentUser: action.payload,
			};
		case UsersActionTypes.SET_USER_CREDENTIALS:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case UsersActionTypes.SET_INPUT_ERRORS:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		case UsersActionTypes.SIGN_IN_FAILURE:
		case UsersActionTypes.SIGN_OUT_FAILURE:
			return {
				...state,
				isFetching: false,
				errors: { currentUser: action.payload },
			};
		case UsersActionTypes.SIGN_OUT_START:
			return {
				...state,
				currentUser: null,
				allUsers: null,
				isFetching: false,
				errors: {
					currentUser: undefined,
					allUsers: undefined,
					onAuthStateChange: undefined,
				},
			};
		/* ================================================================ */
		/*  All Users                                                       */
		/* ================================================================ */
		case UsersActionTypes.FETCH_ALL_USERS_START:
			return {
				...state,
				isFetching: true,
			};
		case UsersActionTypes.FETCH_ALL_USERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				allUsers: action.payload,
			};
		case UsersActionTypes.FETCH_ALL_USERS_FAILURE:
			return {
				...state,
				isFetching: false,
				errors: { allUsers: action.payload },
			};
		case UsersActionTypes.SIGN_UP_FAILURE:
			return {
				...state,
				[action.payload.inputName]: action.payload.value,
			};
		/* ================================================================ */
		/*  Process Remove                                                  */
		/* ================================================================ */
		case UsersActionTypes.AUTH_LISTENER_FAILURE:
			return {
				...state,
				isFetching: false,
				errors: { onAuthStateChange: action.payload },
			};
		case UsersActionTypes.CLEAR_INPUT_ERRORS:
			return {
				...state,
				errorDisplayName: '',
				errorEmail: '',
				errorPassword: '',
				errorConfirmPassword: '',
			};
		case UsersActionTypes.CLEAR_USER_CREDENTIALS:
			return {
				...state,
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			};
		default:
			return state;
	}
};

export default usersReducer;
