import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// import {select} from 'redux-saga/effects';
// ...
// ...
// function *sampleSaga(params) {
//    const username = yield select(selectors.username);
// }

// Actions
import ItemsTableActionTypes from './items-table.types';
import * as ItemsTableActions from './items-table.actions';

// Selectors
import * as Selectors from './items-table.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* setOrder({ payload: property }) {
	const order = yield select(Selectors.selectOrder);
	const orderBy = yield select(Selectors.selectOrderBy);
	const isAsc = yield orderBy === property && order === 'asc';
	yield console.log('@@ setOrder - orderBy', orderBy);

	yield put(ItemsTableActions.setOrderSuccess(isAsc ? 'desc' : 'asc'));
	yield put(ItemsTableActions.setOrderBySuccess(property));
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSetOrderStart() {
	yield takeLatest(ItemsTableActionTypes.SET_ORDER_START, setOrder);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* itemsTableSagas() {
	yield all([call(onSetOrderStart)]);
}
