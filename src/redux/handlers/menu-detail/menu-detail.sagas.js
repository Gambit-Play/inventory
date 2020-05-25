import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import {
	updateDocument,
	createCollectionAndDocument,
	deleteDocuments,
} from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Utils
import {
	convertToFloat,
	filterArrayExclude,
} from '../../../utils/global.utils';

// Action Types
import MenuDetailActionTypes from './menu-detail.types';

// Actions
import { removeSelectedMenus } from '../menus-table/menus-table.actions';
import {
	fetchMenuSuccess,
	fetchMenuFailure,
	updateMenuSuccess,
	updateMenuFailure,
	createMenuSuccess,
	createMenuFailure,
	deleteMenuSuccess,
	deleteMenuFailure,
	setItemsIdSuccess,
	setItemsIdFailure,
	setItemsIdQuantitySuccess,
	setItemsIdQuantityFailure,
	removeSelectedItemsId,
	removeItemsIdSuccess,
	removeItemsIdFailure,
} from './menu-detail.actions';

// Selectors
import { selectSingleMenu } from '../../menus/menus.selectors';
import { selectCurrentUser } from '../../users/users.selectors';
import { selectMenu } from './menu-detail.selectors';
import { selectSelected } from '../menus-table/menus-table.selectors';

/* ================================================================ */
/*  Reusable Function Generators                                    */
/* ================================================================ */

export function* deleteDocumentsFromCollection(deleteMenus) {
	try {
		yield call(deleteDocuments, COLLECTION_IDS.MENUS, deleteMenus);
		yield put(deleteMenuSuccess());
	} catch (error) {
		console.log(error);
		yield put(deleteMenuFailure());
	}
}

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchMenuStart({ payload: menuId }) {
	try {
		const menu = yield select(selectSingleMenu(menuId));
		yield put(fetchMenuSuccess(menu));
	} catch (error) {
		console.log(error);
		yield put(fetchMenuFailure(error));
	}
}

export function* updateMenuStart() {
	try {
		const menu = yield select(selectMenu);
		const currentUser = yield select(selectCurrentUser);
		const updatedMenu = {
			id: menu.id,
			name: menu.name,
			price: convertToFloat(menu.price),
			description: menu.description,
			itemsId: menu.itemsId,
			categoryId: menu.categoryId,
			createdAt: menu.createdAt,
			createdById: menu.createdById,
			updatedAt: new Date().toISOString(),
			updatedById: currentUser.id,
		};

		yield call(updateDocument, COLLECTION_IDS.MENUS, menu.id, updatedMenu);
		yield put(updateMenuSuccess());
	} catch (error) {
		console.log(error);
		yield put(updateMenuFailure());
	}
}

export function* createMenuStart() {
	try {
		const menu = yield select(selectMenu);
		const currentUser = yield select(selectCurrentUser);

		const newMenu = [
			{
				name: menu.name,
				price: menu.price ? convertToFloat(menu.price) : 0,
				description: menu.description,
				itemsId: menu.itemsId,
				categoryId: menu.categoryId,
				createdAt: new Date().toISOString(),
				createdById: currentUser.id,
				updatedAt: '',
				updatedById: '',
			},
		];
		yield call(createCollectionAndDocument, COLLECTION_IDS.MENUS, newMenu);
		yield put(createMenuSuccess());
	} catch (error) {
		console.log(error);
		yield put(createMenuFailure(error));
	}
}

export function* deleteMenuStart() {
	try {
		const menu = yield select(selectMenu);
		const deleteMenu = [menu.id];
		yield deleteDocumentsFromCollection(deleteMenu);
	} catch (error) {
		console.log(error);
		yield put(deleteMenuFailure());
	}
}

export function* deleteMultipleMenusStart() {
	try {
		const selected = yield select(selectSelected);

		yield deleteDocumentsFromCollection(selected);
		yield put(removeSelectedMenus());
	} catch (error) {
		console.log(error);
		yield put(deleteMenuFailure());
	}
}

export function* setNewItemsIdStart() {
	try {
		const { itemsId, selectedItemsId } = yield select(selectMenu);
		const newItemsId = yield itemsId.concat(selectedItemsId);

		yield put(setItemsIdSuccess(newItemsId));
		yield put(removeSelectedItemsId());
	} catch (error) {
		console.log(error);
		yield put(setItemsIdFailure(error));
	}
}

export function* removeItemIdStart({ payload: itemId }) {
	try {
		const { itemsId } = yield select(selectMenu);
		const newItemsId = filterArrayExclude(itemsId, [{ id: itemId }]);
		yield put(removeItemsIdSuccess(newItemsId));
	} catch (error) {
		console.log(error);
		yield put(removeItemsIdFailure(error));
	}
}

export function* setItemsIdQuantityStart({ payload: { index, quantity } }) {
	try {
		const { itemsId } = yield select(selectMenu);
		const newArray = [...itemsId];
		newArray[index].quantity = quantity;

		yield put(setItemsIdQuantitySuccess(newArray));
	} catch (error) {
		console.log(error);
		yield put(setItemsIdQuantityFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchMenuStart() {
	yield takeLatest(MenuDetailActionTypes.FETCH_MENU_START, fetchMenuStart);
}

export function* onUpdateMenuStart() {
	yield takeLatest(MenuDetailActionTypes.UPDATE_MENU_START, updateMenuStart);
}

export function* onCreateMenuStart() {
	yield takeLatest(MenuDetailActionTypes.CREATE_MENU_START, createMenuStart);
}

export function* onDeleteMenuStart() {
	yield takeLatest(MenuDetailActionTypes.DELETE_MENU_START, deleteMenuStart);
}

export function* onDeleteMultipleMenusStart() {
	yield takeLatest(
		MenuDetailActionTypes.DELETE_MULTIPLE_MENUS_START,
		deleteMultipleMenusStart
	);
}

export function* onSetNewItemsIdStart() {
	yield takeLatest(
		MenuDetailActionTypes.SET_ITEMS_ID_START,
		setNewItemsIdStart
	);
}

export function* onSetItemsIdQuantityStart() {
	yield takeLatest(
		MenuDetailActionTypes.SET_ITEMS_ID_QUANTITY_START,
		setItemsIdQuantityStart
	);
}

export function* onRemoveItemFromListStart() {
	yield takeLatest(
		MenuDetailActionTypes.REMOVE_ITEMS_ID_START,
		removeItemIdStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* menuDetailSagas() {
	yield all([
		call(onFetchMenuStart),
		call(onUpdateMenuStart),
		call(onCreateMenuStart),
		call(onDeleteMenuStart),
		call(onDeleteMultipleMenusStart),
		call(onSetNewItemsIdStart),
		call(onSetItemsIdQuantityStart),
		call(onRemoveItemFromListStart),
	]);
}
