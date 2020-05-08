import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Action Types
import ItemDetailActionTypes from './item-detail.types';

// Actions
import {
	fetchItemSuccess,
	fetchItemFailure,
	removeItem,
} from './item-detail.actions';

// Selectors
import { selectSingleItem } from '../../items/items.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchItemStart({ payload: itemId }) {
	try {
		const item = yield select(selectSingleItem(itemId));
		yield put(fetchItemSuccess(item));
	} catch (error) {
		console.log(error);
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchItemStart() {
	yield takeLatest(ItemDetailActionTypes.FETCH_ITEM_START, fetchItemStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemDetailSagas() {
	yield all([call(onFetchItemStart)]);
}
