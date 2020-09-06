import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Utils
import { convertArrayToObject } from '../../utils/global.utils';

// Action Types
import UsersActionTypes from './users.types';

// Actions
import * as UsersActions from './users.actions';
import * as ItemsActions from '../items/items.actions';
import * as MenusActions from '../menus/menus.actions';

// Selectors
import {
	selectEmail,
	selectPassword,
	selectConfirmPassword,
	selectDisplayName,
} from './users.selectors';

// Firebase utils
import {
	signInWithGoogle,
	createUserProfileDocument,
	signOutFromGoogle,
	auth,
	getUsersCollection,
} from '../../firebase/firebase.utils';

/* ================================================================ */
/*  Reusable Function Generators                                    */
/* ================================================================ */

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield userRef.get();

		yield put(
			UsersActions.fetchCurrentUserSuccess({
				id: userSnapshot.id,
				...userSnapshot.data(),
			})
		);
	} catch (error) {
		console.log(error.message);
		yield put(UsersActions.signInFailure(error.message));
	}
}

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe = null;

export function* signInWithGoogleStart() {
	try {
		const {
			additionalUserInfo: { profile },
			user,
		} = yield call(signInWithGoogle);

		const additionalData = {
			firstName: profile.given_name,
			lastName: profile.family_name,
			avatar: profile.picture,
			company: '',
			role: '',
		};
		yield call(getSnapshotFromUserAuth, user, additionalData);
		yield authStateChangedStart();
	} catch (error) {
		console.log(error.message);
		yield put(UsersActions.signInFailure(error.message));
	}
}

export function* signInWithEmail() {
	try {
		yield put(UsersActions.clearInputErrors());

		const email = yield select(selectEmail);
		const password = yield select(selectPassword);

		const { user } = yield auth.signInWithEmailAndPassword(email, password);

		console.log('@@@@@ signInWithEmail - user:', user);

		yield call(getSnapshotFromUserAuth, user);
		yield put(UsersActions.clearUserCredentials());
	} catch (error) {
		console.log(error);
		const userNotExist = yield error.code.includes('user-not-found');

		if (userNotExist)
			return yield put(
				UsersActions.signUpFailure(
					'errorEmail',
					'This user does not exist!'
				)
			);

		yield put(UsersActions.signInFailure(error));
	}
}

export function* authStateChangedStart() {
	try {
		unsubscribe = yield auth.onAuthStateChanged(userAuth => {
			/* Code for when auth state changes */
		});
	} catch (error) {
		console.log(error.message);
		yield put(UsersActions.onAuthStateChangeFailure(error.message));
	}
}

export function* fetchAllUsersCollectionAsync() {
	try {
		const usersCollection = yield call(getUsersCollection);
		const newUsersCollection = yield call(
			convertArrayToObject,
			usersCollection,
			'id'
		);
		yield put(UsersActions.fetchAllUsersSuccess(newUsersCollection));
		yield put(ItemsActions.fetchItemsCollectionStart());
		yield put(MenusActions.fetchMenusCollectionStart());
	} catch (error) {
		console.log(error.message);
		yield put(UsersActions.fetchAllUsersFailure(error.message));
	}
}

export function* removeAuthListenerStart() {
	if (unsubscribe) {
		yield call(unsubscribe);
		unsubscribe = null;
	}
}

export function* signOutFromGoogleStart() {
	try {
		yield call(signOutFromGoogle);
		yield put(ItemsActions.clearItemsStart());
	} catch (error) {
		console.log(error.message);
		yield put(UsersActions.signOutFailure(error.message));
	}
}

export function* signUpStart() {
	try {
		yield put(UsersActions.clearInputErrors());

		const email = yield select(selectEmail);
		const password = yield select(selectPassword);
		const confirmPassword = yield select(selectConfirmPassword);
		const displayName = yield select(selectDisplayName);

		if (!displayName)
			return yield put(
				UsersActions.setInputErrors(
					'errorDisplayName',
					'Please type in your display name!'
				)
			);
		if (confirmPassword !== password)
			return yield put(
				UsersActions.setInputErrors(
					'errorConfirmPassword',
					'Password does not match!'
				)
			);

		const { user } = yield auth.createUserWithEmailAndPassword(
			email,
			password
		);

		yield put(
			UsersActions.signUpSuccess({
				user,
				additionalData: {
					displayName,
					firstName: '',
					lastName: '',
					avatar: '',
					company: '',
					role: '',
				},
			})
		);
		yield put(UsersActions.clearUserCredentials());
	} catch (error) {
		console.log(error);
		const isEmail = yield error.code.includes('email');
		const isPassword = yield error.code.includes('password');

		if (isEmail)
			yield put(
				UsersActions.signUpFailure(
					'errorEmail',
					'Please write a correct email address!'
				)
			);
		if (isPassword)
			yield put(
				UsersActions.signUpFailure('errorPassword', error.message)
			);
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield call(getSnapshotFromUserAuth, user, additionalData);
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onGoogleSignInStart() {
	yield takeLatest(
		UsersActionTypes.GOOGLE_SIGN_IN_START,
		signInWithGoogleStart
	);
}

export function* onGoogleSignOutStart() {
	yield takeLatest(UsersActionTypes.SIGN_OUT_START, signOutFromGoogleStart);
}

export function* onEmailSignInStart() {
	yield takeLatest(UsersActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onAuthStateChangedStart() {
	yield takeLatest(
		UsersActionTypes.AUTH_LISTENER_START,
		authStateChangedStart
	);
}

export function* onRemoveAuthListenerStart() {
	yield takeLatest(
		UsersActionTypes.REMOVE_USERS_LISTENER,
		removeAuthListenerStart
	);
}

export function* onFetchAllUsersCollectioStart() {
	yield takeLatest(
		UsersActionTypes.FETCH_ALL_USERS_START,
		fetchAllUsersCollectionAsync
	);
}

export function* onSignUpStart() {
	yield takeLatest(UsersActionTypes.SIGN_UP_START, signUpStart);
}

export function* onSignUpSuccess() {
	yield takeLatest(UsersActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onGoogleSignOutStart),
		call(onAuthStateChangedStart),
		call(onRemoveAuthListenerStart),
		call(onFetchAllUsersCollectioStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onEmailSignInStart),
	]);
}
