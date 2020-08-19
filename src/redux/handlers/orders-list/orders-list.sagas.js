import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { createCollectionAndDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Status
import STATUS from '../../../status/status';

// Types
import Types from './orders-list.types';

// Actions
import {
	fetchOrdersSuccess,
	fetchOrdersFailure,
	setOrderStatusSuccess,
} from './orders-list.actions';

// Selectors
import { selectCurrentOrders } from '../../orders/orders.selectors';
import { selectCurrentMenus } from '../../menus/menus.selectors';
import { selectCurrentOrders as selectOrdersList } from '../../handlers/orders-list/orders-list.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchOrdersStart() {
	try {
		const currentOrders = yield select(selectCurrentOrders);
		const currentMenus = yield select(selectCurrentMenus);

		const newCurrentOrders = currentOrders.map(order => {
			const newSelectedMenus = order.selectedMenus.map(menu => {
				const { name } = currentMenus.find(
					currMenu => currMenu.id === menu.selectedMenuId
				);

				const extraMenuItems = menu.extraMenuItemsId.map(menuItem => {
					const { name } = currentMenus.find(
						currMenu => currMenu.id === menuItem.selectedExtraItemId
					);

					return { name: name };
				});

				return {
					selectedMenuName: name,
					selectedMenuId: menu.selectedMenuId,
					extraMenuItems: extraMenuItems,
				};
			});

			return {
				createdAt: order.createdAt,
				createdBy: order.createdBy,
				createdById: order.createdById,
				id: order.id,
				orderStatus: order.orderStatus,
				selectedMenus: newSelectedMenus,
				totalPrice: order.totalPrice,
				updatedAt: order.updatedAt,
				updatedBy: order.updatedBy,
				updatedById: order.updatedById,
			};
		});

		yield put(fetchOrdersSuccess(newCurrentOrders));
	} catch (error) {
		console.log(error);
		yield put(fetchOrdersFailure(error));
	}
}

export function* setOrderStatusStart({ payload: { id, status } }) {
	try {
		const ordersList = yield select(selectOrdersList);

		const updatedCurrentOrders = ordersList.map(order => {
			if (order.id === id) {
				order.orderStatus = status;
			}

			return order;
		});

		yield put(setOrderStatusSuccess(updatedCurrentOrders));
	} catch (error) {
		console.log(error);
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchOrdersStart() {
	yield takeLatest(Types.FETCH_ORDERS_START, fetchOrdersStart);
}

export function* onSetOrderStatusStart() {
	yield takeLatest(Types.SET_ORDER_STATUS_START, setOrderStatusStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* ordersListSagas() {
	yield all([call(onFetchOrdersStart), call(onSetOrderStatusStart)]);
}
