import UsersActionTypes from './users.types';

const INITIAL_STATE = {
	currentUser: null,
	isFetching: false,
	errors: {
		currentUser: undefined,
		allUsers: undefined,
		onAuthStateChange: undefined,
	},
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
		/*  Listeners                                                       */
		/* ================================================================ */
		case UsersActionTypes.AUTH_LISTENER_FAILURE:
			return {
				...state,
				isFetching: false,
				errors: { onAuthStateChange: action.payload },
			};
		default:
			return state;
	}
};

export default usersReducer;
