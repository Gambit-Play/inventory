import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { createCollectionAndDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Utils
import { groupBy } from '../../../utils/global.utils';

// Types
import Types from './order-form.types';

// Actions
import {
	selectMenuSuccess,
	selectMenuFailure,
	setExtraMenuItemSuccess,
	setExtraMenuItemFailure,
	hasErrorSuccess,
	hasErrorFailure,
	removeOrderItemSuccess,
	removeOrderItemFailure,
	createOrderSuccess,
	createOrderFailure,
} from './order-form.actions';

// Selectors
import {
	selectSelectedMenus,
	selectSelectedOrder,
	selectTotalPrice,
	selectTypeOfPayment,
	selectIsCardPayment,
	selectIsCashPayment,
} from './order-form.selectors';
import { selectCurrentMenus } from '../../menus/menus.selectors';
import { selectCurrentUser } from '../../users/users.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* selectMenuStart({ payload: menu }) {
	try {
		const selectedMenus = yield select(selectSelectedMenus);
		const selectedOrder = yield select(selectSelectedOrder);
		const currentMenus = yield select(selectCurrentMenus);

		const newExtraMenuItemsId = yield menu.extraMenuItemsId.map(
			extraMenuItem => {
				if (extraMenuItem) {
					const { name, categoryId } = currentMenus.find(
						menu => menu.id === extraMenuItem.id
					);
					const newExtraMenuItem = {
						...extraMenuItem,
						name,
						categoryId,
					};

					return newExtraMenuItem;
				}

				return null;
			}
		);

		const extraMenuItemsId = yield Object.entries(
			groupBy(newExtraMenuItemsId, 'categoryId')
		);

		yield extraMenuItemsId.map(item => {
			return item[1].length > 1 ? item.splice(2, 0, '') : item;
		});

		const newMenu = yield {
			id: menu.id,
			name: menu.name,
			price: menu.price,
			extraMenuItemsId,
		};

		const newSelectedMenus = yield [...selectedMenus];

		yield newSelectedMenus.length
			? newSelectedMenus[selectedOrder].push(newMenu)
			: newSelectedMenus.push([newMenu]);

		yield put(selectMenuSuccess(newSelectedMenus));
		yield hasErrorStart(newSelectedMenus);
	} catch (error) {
		console.log(error);
		yield put(selectMenuFailure(error));
	}
}

export function* setExtraMenuItemStart({ payload: props }) {
	try {
		const { id, selectedMenusIndex, selectedExtraIndex } = props;
		const selectedMenus = yield select(selectSelectedMenus);
		const selectedOrder = yield select(selectSelectedOrder);

		const newSelectedMenus = yield [...selectedMenus];

		newSelectedMenus[selectedOrder][selectedMenusIndex].extraMenuItemsId[
			selectedExtraIndex
		][2] = id;

		yield put(setExtraMenuItemSuccess(newSelectedMenus));
		yield hasErrorStart(newSelectedMenus);
	} catch (error) {
		console.log(error);
		yield put(setExtraMenuItemFailure(error));
	}
}

export function* hasErrorStart(selectedMenus) {
	try {
		const isArrayEmpty = yield selectedMenus.some(
			menu => menu.length === 0
		);

		if (isArrayEmpty === false) {
			const hasError = yield selectedMenus.some(menus =>
				menus.some(
					menu =>
						menu.extraMenuItemsId.length &&
						menu.extraMenuItemsId.some(item => item[2] === '')
				)
			);
			yield put(hasErrorSuccess(hasError));
		} else {
			yield put(hasErrorSuccess(true));
		}
	} catch (error) {
		console.log(error);
		yield put(hasErrorFailure(error));
	}
}

export function* clearOrderItemStart({ payload: index }) {
	try {
		const selectedMenus = yield select(selectSelectedMenus);
		const selectedOrder = yield select(selectSelectedOrder);

		const newSelectedMenus = yield [...selectedMenus];

		newSelectedMenus[selectedOrder].splice(index, 1);

		yield hasErrorStart(newSelectedMenus);
		yield put(removeOrderItemSuccess(newSelectedMenus));
	} catch (error) {
		console.log(error);
		yield put(removeOrderItemFailure(error));
	}
}

export function* createOrderStart() {
	try {
		const selectedMenus = yield select(selectSelectedMenus);
		const totalPrice = yield select(selectTotalPrice);
		const typeOfPayment = yield select(selectTypeOfPayment);
		const currentUser = yield select(selectCurrentUser);

		const newSelectedMenus = selectedMenus[0].map((item, index) => {
			const extraMenuItemsId = item.extraMenuItemsId.map(extraMenu => {
				return {
					categoryId: extraMenu[0],
					selectedExtraItemId: extraMenu[2] ? extraMenu[2] : '',
				};
			});

			return {
				selectedMenuId: item.id,
				extraMenuItemsId: extraMenuItemsId,
				selectedMenuIndex: index,
			};
		});

		const newOrder = yield [
			{
				selectedMenus: newSelectedMenus,
				totalPrice: totalPrice,
				typeOfPayment,
				createdAt: new Date().toISOString(),
				createdById: currentUser.id,
				updatedAt: '',
				updatedById: '',
			},
		];

		yield call(
			createCollectionAndDocument,
			COLLECTION_IDS.ORDERS,
			newOrder
		);
		yield put(createOrderSuccess());
	} catch (error) {
		console.log(error);
		yield put(createOrderFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSelectMenuStart() {
	yield takeLatest(Types.SELECT_MENU_START, selectMenuStart);
}

export function* onSetExtraMenuItemStart() {
	yield takeLatest(Types.SET_EXTRA_MENU_ITEM_START, setExtraMenuItemStart);
}

export function* onRemoveOrderItemStart() {
	yield takeLatest(Types.REMOVE_ORDER_ITEM_START, clearOrderItemStart);
}

export function* onHasErrorStart() {
	yield takeLatest(Types.HAS_ERROR_START, hasErrorStart);
}

export function* onCreateOrderStart() {
	yield takeLatest(Types.CREATE_ORDER_START, createOrderStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* orderFormSagas() {
	yield all([
		call(onSelectMenuStart),
		call(onSetExtraMenuItemStart),
		call(onRemoveOrderItemStart),
		call(onHasErrorStart),
		call(onCreateOrderStart),
	]);
}
