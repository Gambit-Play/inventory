import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Firebase
import { updateDocument } from '../../../firebase/firebase.utils';
import * as COLLECTION_IDS from '../../../firebase/collections.ids';

// Status
import STATUS from '../../../status/status';

// Types
import Types from './orders-list.types';
import OrdersCollectionTypes from '../../orders/orders.types';

// Actions
import {
	fetchOrdersSuccess,
	fetchOrdersFailure,
	updateOrderStatusSuccess,
	updateOrderStatusFailure,
} from './orders-list.actions';

// Selectors
import { selectCurrentOrders } from '../../orders/orders.selectors';
import { selectCurrentMenus } from '../../menus/menus.selectors';
import { selectCurrentUser } from '../../users/users.selectors';
import {
	selectUpdatedOrderId,
	selectUpdatedOrderStatus,
} from '../../handlers/orders-list/orders-list.selectors';

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

export function* updateOrderStatusStart() {
	try {
		const id = yield select(selectUpdatedOrderId);
		const status = yield select(selectUpdatedOrderStatus);
		const currentOrders = yield select(selectCurrentOrders);
		const currentUser = yield select(selectCurrentUser);

		const order = yield currentOrders.find(order => order.id === id);
		const updatedOrder = yield {
			...order,
			orderStatus: status,
			updatedAt: new Date().toISOString(),
			updatedById: currentUser.id,
		};

		yield call(updateDocument, COLLECTION_IDS.ORDERS, id, updatedOrder);
	} catch (error) {
		console.log(error);
		yield put(updateOrderStatusFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchOrdersStart() {
	yield takeLatest(Types.FETCH_ORDERS_START, fetchOrdersStart);
	yield takeLatest(
		OrdersCollectionTypes.FETCH_ORDERS_COLLECTIONS_SUCCESS,
		fetchOrdersStart
	);
}

export function* onUpdateOrderStatusStart() {
	yield takeLatest(Types.UPDATE_ORDER_STATUS_START, updateOrderStatusStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* ordersListSagas() {
	yield all([call(onFetchOrdersStart), call(onUpdateOrderStatusStart)]);
}
