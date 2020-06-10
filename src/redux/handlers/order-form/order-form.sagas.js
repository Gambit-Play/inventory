import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Types
import OrderFormActionTypes from './order-form.types';

// Actions
import * as OrderFormActions from './order-form.actions';

// Selectors
import {
	selectSelectedMenus,
	selectSelectedOrder,
} from './order-form.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* selectMenuStart({ payload: menu }) {
	try {
		const selectedMenus = yield select(selectSelectedMenus);
		const selectedOrder = yield select(selectSelectedOrder);

		const menusArray = selectedMenus;

		menusArray.length
			? menusArray[selectedOrder].push(menu)
			: menusArray.push([menu]);

		console.log(menusArray);
	} catch (error) {
		console.log(error);
		yield put(OrderFormActions.selectMenuFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSelectMenuStart() {
	yield takeLatest(OrderFormActionTypes.SELECT_MENU_START, selectMenuStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* orderFormSagas() {
	yield all([call(onSelectMenuStart)]);
}
