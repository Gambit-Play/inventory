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
import { selectCurrentUser, selectAllUsers } from '../../users/users.selectors';

/* ================================================================ */
/*  Actions                                                         */
/* ================================================================ */

export function* selectMenuStart({ payload: menu }) {
	try {
		const selectedMenus = yield select(selectSelectedMenus);
		const selectedOrder = yield select(selectSelectedOrder);
		const currentUser = yield select(selectCurrentUser);
		const allUsers = yield select(selectAllUsers);

		const newMenu = {
			id: menu.id,
			name: menu.name,
			price: menu.price,
			createdAt: new Date().toISOString(),
			createdById: currentUser.id,
			createdBy: allUsers.hasOwnProperty(menu.createdById)
				? allUsers[menu.createdById].displayName
				: '',
			updatedAt: '',
			updatedById: '',
			updatedBy: '',
		};

		const newSelectedMenus = [...selectedMenus];

		yield newSelectedMenus.length
			? newSelectedMenus[selectedOrder].push(newMenu)
			: newSelectedMenus.push([newMenu]);

		yield put(OrderFormActions.selectMenuSuccess(newSelectedMenus));
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
