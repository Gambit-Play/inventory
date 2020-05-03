import { takeLatest, put, all, call } from 'redux-saga/effects';

// Action Types
import UsersActionTypes from './users.types';

// Actions
import * as UsersActions from './users.actions';

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
			UsersActions.fetchCurrentUserSuccess({
				id: userSnapshot.id,
				...userSnapshot.data(),
			})
		);
	} catch (error) {
        console.log(error.message)
		yield put(UsersActions.signInFailure(error.message));
	}
}

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribeAuth = null;

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
	} catch (error) {
        console.log(error.message);
        yield put(UsersActions.signInFailure(error.message));
	}
}

export function* authStateChangedStart() {
	try {
		unsubscribeAuth = yield auth.onAuthStateChanged(userAuth => {
            /* Code for when auth state changes */
            console.log('@@ onAuthStateChanged: Something Changed');
            
		});
	} catch (error) {
        console.log(error.message);
        yield put(UsersActions.onAuthStateChangeFailure(error.message));
	}
}

export function* removeAuthListenerStart() {
	if (unsubscribeAuth) {
		yield call(unsubscribeAuth);
		unsubscribeAuth = null;
	}
}

export function* signOutFromGoogleStart() {
	try {
		yield call(signOutFromGoogle);
	} catch (error) {
        console.log(error.message);
        yield put(UsersActions.signOutFailure(error.message));
	}
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

export function* onAuthStateChangedStart() {
	yield takeLatest(
		UsersActionTypes.AUTH_LISTENER_START,
		authStateChangedStart
	);
}

export function* onRemoveAuthListenerStart() {
	yield takeLatest(
		UsersActionTypes.REMOVE_USER_LISTENER,
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
