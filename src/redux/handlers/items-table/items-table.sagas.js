import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Actions
import ItemsTableActionTypes from './items-table.types';
import * as ItemsTableActions from './items-table.actions';

// Selectors
import { selectOrder, selectOrderBy } from './items-table.selectors';
import { selectCurrentItems } from '../../items/items.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* setOrder({ payload: property }) {
	try {
		const order = yield select(selectOrder);
		const orderBy = yield select(selectOrderBy);
		const isAsc = yield orderBy === property && order === 'asc';

		yield put(ItemsTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc'));
		yield put(ItemsTableActions.setOrderBySuccess(property));
	} catch (error) {
		console.log(error);
		yield put(ItemsTableActions.setOrderFailure(error));
	}
}

export function* setSelectAll({ payload: checkedAll }) {
	try {
		if (checkedAll) {
			// yield console.log('@@ setOrder - event', event);
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

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(ItemsTableActionTypes.SET_ORDER_START, setOrder);
}

export function* onSetSelectAllStart() {
	yield takeLatest(ItemsTableActionTypes.SET_SELECT_ALL_START, setSelectAll);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemsTableSagas() {
	yield all([call(onSetOrderStart), call(onSetSelectAllStart)]);
}
