import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Action Types
import OrdersActionTypes from './orders.types';

// Actions
import {
	fetchOrdersCollectionSuccess,
	fetchOrdersCollectionFailure,
	fetchOrdersCollectionUpdate,
} from './orders.actions';

// Firebase utils
import { getCollection } from '../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../firebase/collections.ids';

// Selectors
import { selectAllUsers } from '../users/users.selectors';

// Redux
import { sagaMiddleware } from '../store';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

let unsubscribe;

export function* fetchOrdersCollectionAsync() {
	try {
		const collectionRef = yield call(getCollection, COLLECTION_IDS.ORDERS);
		const allUsers = yield select(selectAllUsers);

		unsubscribe = yield collectionRef.onSnapshot(snapshot => {
			sagaMiddleware.run(fetchCurrentOrders);

			const data = snapshot.docs.map(doc => {
				const result = doc.data();

				const newData = {
					...result,
					createdBy: allUsers.hasOwnProperty(result.createdById)
						? allUsers[result.createdById].displayName
						: '',
					updatedBy: allUsers.hasOwnProperty(result.updatedById)
						? allUsers[result.updatedById].displayName
						: '',
				};

				return newData;
			});

			sagaMiddleware.run(fetchCurrentOrders, data);
		});
	} catch (error) {
		yield put(fetchOrdersCollectionFailure(error.message));
	}
}

export function* fetchCurrentOrders(data) {
	if (!data) yield put(fetchOrdersCollectionUpdate());
	if (data) {
		yield put(fetchOrdersCollectionSuccess(data));
	}
}

export function* removeCollectionListener() {
	yield call(unsubscribe);
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onfetchOrdersCollectionStart() {
	yield takeLatest(
		OrdersActionTypes.FETCH_ORDERS_COLLECTIONS_START,
		fetchOrdersCollectionAsync
	);
}

export function* onremoveListenerStart() {
	yield takeLatest(
		OrdersActionTypes.REMOVE_ORDERS_COLLECTION_LISTENER,
		removeCollectionListener
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* ordersSagas() {
	yield all([
		call(onfetchOrdersCollectionStart),
		call(onremoveListenerStart),
	]);
}
