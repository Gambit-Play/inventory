import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Utils
import { formatSelectedMenus } from '../../../utils/global.utils';

// Types
import OrdersTableActionTypes from './orders-table.types';

// Actions
import * as OrdersTableActions from './orders-table.actions';

// Selectors
import { selectOrder, selectOrderBy } from './orders-table.selectors';
import { selectCurrentOrders } from '../../orders/orders.selectors';
import { selectCurrentMenus } from '../../menus/menus.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* fetchOrdersTableStart() {
	try {
		const currentOrders = yield select(selectCurrentOrders);
		const currentMenus = yield select(selectCurrentMenus);

		const newCurrentOrders = yield currentOrders.map(order => {
			const newSelectedMenus = formatSelectedMenus(
				order.selectedMenus,
				currentMenus
			);

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

		yield put(OrdersTableActions.fetchOrdersTableSuccess(newCurrentOrders));
	} catch (error) {
		yield console.log(error);
		yield put(OrdersTableActions.fetchOrdersTableFailure(error));
	}
}

export function* setOrder({ payload: columnName }) {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const isAsc = yield orderBy === columnName && order === 'asc';

		yield put(OrdersTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc'));
		yield put(OrdersTableActions.setOrderBySuccess(columnName));
	} catch (error) {
		console.log(error);
		yield put(OrdersTableActions.setOrderFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onFetchOrdersTableStart() {
	yield takeLatest(
		OrdersTableActionTypes.FETCH_ORDERS_TABLE_START,
		fetchOrdersTableStart
	);
}

export function* onSetOrderStart() {
	yield takeLatest(OrdersTableActionTypes.SET_ORDERS_ORDER_START, setOrder);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* ordersTableSagas() {
	yield all([call(onFetchOrdersTableStart), call(onSetOrderStart)]);
}
