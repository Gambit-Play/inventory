import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Utils
import { formatSelectedMenus } from '../../../utils/global.utils';

// Types
import OrdersTableActionTypes from './orders-table.types';

// Actions
import * as OrdersTableActions from './orders-table.actions';

// Selectors
import {
	selectOrder,
	selectOrderBy,
	selectOrderTable,
} from './orders-table.selectors';
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

export function* setOrderByStart() {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const orderTable = yield select(selectOrderTable);
		const sorter =
			orderBy === 'totalPrice'
				? orderBy
				: order => {
						return order[orderBy].toLowerCase();
				  };
		const newOrdersTable = yield orderData(orderTable, [sorter], order);

		yield put(OrdersTableActions.fetchOrdersTableSuccess(newOrdersTable));
	} catch (error) {
		console.log(error);
	}
}

export function* setPageStart({ payload: page }) {
	try {
		yield put(OrdersTableActions.setPageSuccess(page));
	} catch (error) {
		console.log(error);
		yield put(OrdersTableActions.setPageFailure(error));
	}
}

export function* setRowsPerPageStart({ payload: rowsPerPage }) {
	try {
		yield put(
			OrdersTableActions.setRowsPerPageSuccess(parseInt(rowsPerPage, 10))
		);
		yield put(OrdersTableActions.setPageSuccess(0));
	} catch (error) {
		console.log(error);
		yield put(OrdersTableActions.setRowsPerPageFailure(error));
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

export function* onSetOrderByStart() {
	yield takeLatest(
		OrdersTableActionTypes.SET_ORDERS_ORDER_BY,
		setOrderByStart
	);
}

export function* onSetPageStart() {
	yield takeLatest(
		OrdersTableActionTypes.SET_ORDERS_PAGE_START,
		setPageStart
	);
}

export function* onSetRowsPerPageStart() {
	yield takeLatest(
		OrdersTableActionTypes.SET_ORDERS_ROWS_PER_PAGE_START,
		setRowsPerPageStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* ordersTableSagas() {
	yield all([
		call(onFetchOrdersTableStart),
		call(onSetOrderStart),
		call(onSetOrderByStart),
		call(onSetPageStart),
		call(onSetRowsPerPageStart),
	]);
}
