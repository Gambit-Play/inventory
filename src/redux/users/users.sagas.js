import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Utils
import { convertArrayToObject } from '../../utils/global.utils';

// Action Types
import UsersActionTypes from './users.types';

// Actions
import * as UsersActions from './users.actions';
import {
	clearItemsStart,
	removeItemsCollectionListener,
} from '../items/items.actions';
import {
	clearMenusStart,
	removeMenusCollectionListener,
} from '../menus/menus.actions';
import {
	clearOrdersStart,
	removeOrdersCollectionListener,
} from '../orders/orders.actions';
import {
	clearCategoriesStart,
	fetchCategoriesCollectionStart,
	removeCategoriesCollectionListener,
} from '../categories/categories.actions';
import {
	clearTablesStart,
	fetchTablesCollectionStart,
	removeTablesCollectionListener,
} from '../tables/tables.actions';
import { clearUnitsCollection } from '../units/units.actions';
import {
	removeCategoriesOrderBy,
	removeCategoriesSearchField,
	clearCategoriesTable,
} from '../handlers/categories-table/categories-table.actions';
import {
	removeTablesOrderBy,
	removeTablesSearchField,
	clearTablesTable,
} from '../handlers/tables-table/tables-table.actions';
import {
	removeMenusOrderBy,
	removeMenusSearchField,
	clearMenusTable,
} from '../handlers/menus-table/menus-table.actions';
import {
	removeItemsOrderBy,
	removeItemsSearchField,
	clearItemsTable,
} from '../handlers/items-table/items-table.actions';
import { clearOrderForm } from '../handlers/order-form/order-form.actions';
import { removeCategory } from '../handlers/category-detail/category-detail.actions';
import { removeItem } from '../handlers/item-detail/item-detail.actions';
import { removeMenu } from '../handlers/menu-detail/menu-detail.actions';
import { clearOrdersList } from '../handlers/orders-list/orders-list.actions';
import { clearOrdersTable } from '../handlers/orders-table/orders-table.actions';
import { removeTable } from '../handlers/table-detail/table-detail.actions';

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

		// TODO: Use this code to create an onAuthStateChanged
		// yield put(authStateChangedStart());
		yield put(UsersActions.fetchMainCollectionsStart());
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

		yield call(getSnapshotFromUserAuth, user);
		yield put(UsersActions.clearUserCredentials());
		yield put(UsersActions.fetchMainCollectionsStart());
	} catch (error) {
		console.log(error);
		const userNotExist = yield error.code.includes('user-not-found');
		const invalidEmail = yield error.code.includes('invalid-email');
		const invalidPassword = yield error.code.includes('wrong-password');

		if (userNotExist)
			return yield put(
				UsersActions.signUpFailure(
					'errorEmail',
					'This user does not exist!'
				)
			);
		if (invalidEmail)
			return yield put(
				UsersActions.signUpFailure(
					'errorEmail',
					'This email is not correct!'
				)
			);
		if (invalidPassword)
			yield put(
				UsersActions.signUpFailure(
					'errorPassword',
					'This password is not correct!'
				)
			);

		yield put(UsersActions.signInFailure(error));
	}
}

// TODO: Use this code to create an onAuthStateChanged
// export function* authStateChangedStart() {
// 	try {
// 		unsubscribe = yield auth.onAuthStateChanged(userAuth => {
// 			/* Code for when auth state changes */
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 		yield put(UsersActions.onAuthStateChangeFailure(error.message));
// 	}
// }

export function* fetchAllUsersCollectionAsync() {
	try {
		const usersCollection = yield call(getUsersCollection);
		const newUsersCollection = yield call(
			convertArrayToObject,
			usersCollection,
			'id'
		);
		yield put(UsersActions.fetchAllUsersSuccess(newUsersCollection));
		yield put(fetchCategoriesCollectionStart());
		yield put(fetchTablesCollectionStart());
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
		yield put(UsersActions.removeAllListeners());
		yield call(clearCollectionsStore);
	} catch (error) {
		console.log(error.message);
		yield put(UsersActions.signOutFailure(error.message));
	}
}

export function* clearCollectionsStore() {
	yield put(clearCategoriesStart());
	yield put(clearItemsStart());
	yield put(clearMenusStart());
	yield put(clearOrdersStart());
	yield put(clearTablesStart());
	yield put(clearUnitsCollection());
	yield put(clearCategoriesTable());
	yield put(removeCategory());
	yield put(clearItemsTable());
	yield put(removeMenu());
	yield put(removeItem());
	yield put(clearMenusTable());
	yield put(clearOrderForm());
	yield put(clearOrdersList());
	yield put(clearOrdersTable());
	yield put(removeTable());
	yield put(clearTablesTable());
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
	yield put(UsersActions.fetchMainCollectionsStart());
}

export function* fetchMainCollectionsStart() {
	try {
		yield put(UsersActions.removeTablesDataStart());
		yield put(UsersActions.fetchAllUsersStart());
		yield put(UsersActions.onAuthStateChangedStart());
	} catch (error) {
		console.log(error);
		yield put(UsersActions.fetchMainCollectionsFailure(error));
	}
}

export function* removeTablesData() {
	yield put(removeCategoriesOrderBy());
	yield put(removeCategoriesSearchField());
	yield put(removeTablesOrderBy());
	yield put(removeTablesSearchField());
	yield put(removeMenusOrderBy());
	yield put(removeMenusSearchField());
	yield put(removeItemsOrderBy());
	yield put(removeItemsSearchField());
}

export function* removeAllListeners() {
	yield put(removeItemsCollectionListener());
	yield put(removeMenusCollectionListener());
	yield put(removeOrdersCollectionListener());
	yield put(removeCategoriesCollectionListener());
	yield put(removeTablesCollectionListener());
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

// TODO: Use this code to create an onAuthStateChanged
// export function* onAuthStateChangedStart() {
// 	yield takeLatest(
// 		UsersActionTypes.AUTH_LISTENER_START,
// 		authStateChangedStart
// 	);
// }

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

export function* onFetchMainCollectionsStart() {
	yield takeLatest(
		UsersActionTypes.FETCH_MAIN_COLLECTIONS_START,
		fetchMainCollectionsStart
	);
}

export function* onRemoveTablesData() {
	yield takeLatest(UsersActionTypes.REMOVE_TABLES_DATA, removeTablesData);
}

export function* onRemoveAllListeners() {
	yield takeLatest(UsersActionTypes.REMOVE_ALL_LISTENERS, removeAllListeners);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onGoogleSignOutStart),
		// TODO: Use this code to create an onAuthStateChanged
		// call(onAuthStateChangedStart),
		call(onRemoveAuthListenerStart),
		call(onFetchAllUsersCollectioStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onEmailSignInStart),
		call(onFetchMainCollectionsStart),
		call(onRemoveTablesData),
		call(onRemoveAllListeners),
	]);
}
