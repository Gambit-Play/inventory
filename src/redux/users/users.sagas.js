import { takeLatest, put, all, call } from 'redux-saga/effects';

// Action Types
import UserActionTypes from './users.types';

// Actions
import * as userActions from './users.actions';

// Firebase utils
import {
	signInWithGoogle,
	createUserProfileDocument,
	signOutFromGoogle,
	auth,
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
			userActions.fetchCurrentUserSuccess({
				id: userSnapshot.id,
				...userSnapshot.data(),
			})
		);
	} catch (error) {
		yield put(userActions.fetchCurrentUserFailure(error));
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

		let additionalData = {
			firstName: profile.given_name,
			lastName: profile.family_name,
			avatar: profile.picture,
			company: '',
			role: '',
		};
		yield getSnapshotFromUserAuth(user, additionalData);
		yield authStateChangedStart();
		console.log('@@ signInWithGoogleStart - unsubscribe', unsubscribe);
	} catch (error) {
		// FIXME: Change this with failure reduc actions
		console.log(error.message);
	}
}

export function* authStateChangedStart() {
	try {
		unsubscribe = yield auth.onAuthStateChanged();
	} catch (error) {
		// FIXME: Change this with failure reduc actions
		console.log(error.message);
	}
}

export function* removeAuthListenerStart() {
	yield console.log('@@ removeAuthListenerStart - unsubscribe', unsubscribe);
	if (unsubscribe) {
		yield call(unsubscribe);
		unsubscribe = null;
	}
	yield console.log('@@ removeAuthListenerStart - unsubscribe', unsubscribe);
}

export function* signOutFromGoogleStart() {
	try {
		yield call(signOutFromGoogle);
	} catch (error) {
		console.log(error.message);
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onGoogleSignInStart() {
	yield takeLatest(
		UserActionTypes.GOOGLE_SIGN_IN_START,
		signInWithGoogleStart
	);
}

export function* onGoogleSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutFromGoogleStart);
}

export function* onAuthStateChangedStart() {
	yield takeLatest(
		UserActionTypes.USER_LISTENER_START,
		authStateChangedStart
	);
}

export function* onRemoveAuthListenerStart() {
	yield takeLatest(
		UserActionTypes.REMOVE_USER_LISTENER,
		removeAuthListenerStart
	);
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
	]);
}
