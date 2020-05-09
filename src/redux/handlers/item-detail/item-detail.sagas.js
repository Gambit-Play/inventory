import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { updateDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Utils
import { convertToFloat } from '../../../utils/global.utils';

// Action Types
import ItemDetailActionTypes from './item-detail.types';

// Actions
import {
	fetchItemSuccess,
	fetchItemFailure,
	updateItemSuccess,
	updateItemFailure,
} from './item-detail.actions';

// Selectors
import { selectSingleItem } from '../../items/items.selectors';
import { selectCurrentUser } from '../../users/users.selectors';
import { selectItem } from './item-detail.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchItemStart({ payload: itemId }) {
	try {
		const item = yield select(selectSingleItem(itemId));
		yield put(fetchItemSuccess(item));
	} catch (error) {
		console.log(error);
		yield put(fetchItemFailure(error));
	}
}

export function* updateItemStart() {
	try {
		const item = yield select(selectItem);
		const currentUser = yield select(selectCurrentUser);
		const updatedItem = {
			id: item.id,
			name: item.name,
			price: item.price,
			quantity: parseFloat(item.quantity),
			unit: item.unit,
			createdAt: item.createdAt,
			createdBy: item.createdBy,
			createdById: item.createdById,
			cost: item.price * item.quantity,
			updatedAt: new Date().toISOString(),
			updatedBy: currentUser.displayName,
			updateddById: currentUser.id,
		};

		yield updateDocument(COLLECTION_IDS.ITEMS, item.id, updatedItem);
		yield put(updateItemSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateItemFailure());
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchItemStart() {
	yield takeLatest(ItemDetailActionTypes.FETCH_ITEM_START, fetchItemStart);
}

export function* onUpdateItemStart() {
	yield takeLatest(ItemDetailActionTypes.UPDATE_ITEM_START, updateItemStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemDetailSagas() {
	yield all([call(onFetchItemStart), call(onUpdateItemStart)]);
}
