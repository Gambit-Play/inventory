import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import orderData from 'lodash/orderBy';

// Types
import ItemsTableActionTypes from './items-table.types';

// Actions
import * as ItemsTableActions from './items-table.actions';
import * as ItemsActions from '../../items/items.actions';

// Selectors
import { selectOrder, selectOrderBy } from './items-table.selectors';
import { selectCurrentItems } from '../../items/items.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* setOrder({ payload: columnName }) {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const isAsc = yield orderBy === columnName && order === 'asc';

		yield put(ItemsTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc'));
		yield put(ItemsTableActions.setOrderBySuccess(columnName));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setOrderFailure(error));
	}
}

export function* setSelectAll({ payload: checkedAll }) {
	try {
		if (checkedAll) {
			const items = yield select(selectCurrentItems);
			const newSelecteds = yield items.map(item => item.id);

			yield put(ItemsTableActions.setSelectAllSuccess(newSelecteds));
		}
		if (!checkedAll) {
			yield put(ItemsTableActions.setSelectAllSuccess([]));
		}
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setSelectAllFailure(error));
	}
}

export function* setOrderDataStart() {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const items = yield select(selectCurrentItems);
		const sorter =
			orderBy === 'price' || orderBy === 'cost' || orderBy === 'quantity'
				? orderBy
				: item => {
						return item[orderBy].toLowerCase();
				  };

		const newItems = yield orderData(items, [sorter], order);

		yield put(ItemsActions.fetchItemsCollectionSuccess(newItems));
	} catch (error) {}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(ItemsTableActionTypes.SET_ORDER_START, setOrder);
}

export function* onSetSelectAllStart() {
	yield takeLatest(ItemsTableActionTypes.SET_SELECT_ALL_START, setSelectAll);
}

export function* onSetOrderDataStart() {
	yield takeLatest(
		ItemsTableActionTypes.SET_ORDER_BY_SUCCESS,
		setOrderDataStart
	);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemsTableSagas() {
	yield all([
		call(onSetOrderStart),
		call(onSetSelectAllStart),
		call(onSetOrderDataStart),
	]);
}
