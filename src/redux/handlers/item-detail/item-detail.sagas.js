import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import {
	updateDocument,
	createCollectionAndDocument,
	deleteDocuments,
} from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Utils
import { convertToFloat } from '../../../utils/global.utils';

// Action Types
import ItemDetailActionTypes from './item-detail.types';

// Actions
import { removeSelected } from '../items-table/items-table.actions';
import {
	fetchItemSuccess,
	fetchItemFailure,
	updateItemSuccess,
	updateItemFailure,
	createItemSuccess,
	createItemFailure,
	deleteItemSuccess,
	deleteItemFailure,
} from './item-detail.actions';

// Selectors
import { selectSingleItem } from '../../items/items.selectors';
import { selectCurrentUser } from '../../users/users.selectors';
import { selectItem } from './item-detail.selectors';
import { selectSelected } from '../items-table/items-table.selectors';

/* ================================================================ */
/*  Reusable Actions                                                */
/* ================================================================ */

export function* deleteDocumentsFromCollection(deleteItems) {
	try {
		yield call(deleteDocuments, COLLECTION_IDS.ITEMS, deleteItems);
		yield put(deleteItemSuccess());
	} catch (error) {
		console.log(error);
		yield put(deleteItemFailure());
	}
}

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
			cost: item.price * item.quantity,
			updatedAt: new Date().toISOString(),
			updatedBy: currentUser.id,
		};

		yield call(updateDocument, COLLECTION_IDS.ITEMS, item.id, updatedItem);
		yield put(updateItemSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateItemFailure());
	}
}

export function* createItemStart() {
	try {
		const item = yield select(selectItem);
		const currentUser = yield select(selectCurrentUser);

		const newItem = [
			{
				name: item.name,
				price: item.price ? convertToFloat(item.price) : 0,
				quantity: item.quantity ? parseFloat(item.quantity) : 0,
				unit: item.unit,
				createdAt: new Date().toISOString(),
				createdBy: currentUser.id,
				cost: item.price * item.quantity,
				updatedAt: '',
				updatedBy: '',
			},
		];
		yield call(createCollectionAndDocument, COLLECTION_IDS.ITEMS, newItem);
		yield put(createItemSuccess());
	} catch (error) {
		console.log(error);
		yield put(createItemFailure(error));
	}
}

export function* deleteItemStart() {
	try {
		const item = yield select(selectItem);
		const deleteItem = [item.id];
		yield deleteDocumentsFromCollection(deleteItem);
	} catch (error) {
		console.log(error);
		yield put(deleteItemFailure());
	}
}

export function* deleteMultipleItemsStart() {
	try {
		const selected = yield select(selectSelected);

		yield deleteDocumentsFromCollection(selected);
		yield put(removeSelected());
	} catch (error) {
		console.log(error);
		yield put(deleteItemFailure());
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

export function* onCreateItemStart() {
	yield takeLatest(ItemDetailActionTypes.CREATE_ITEM_START, createItemStart);
}

export function* onDeleteItemStart() {
	yield takeLatest(ItemDetailActionTypes.DELETE_ITEM_START, deleteItemStart);
}

export function* onDeleteMultipleItemsStart() {
	yield takeLatest(
		ItemDetailActionTypes.DELETE_MULTIPLE_ITEMS_START,
		deleteMultipleItemsStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemDetailSagas() {
	yield all([
		call(onFetchItemStart),
		call(onUpdateItemStart),
		call(onCreateItemStart),
		call(onDeleteItemStart),
		call(onDeleteMultipleItemsStart),
	]);
}
