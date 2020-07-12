import { takeLatest, put, all, call, select } from 'redux-saga/effects';

// Utils
import { groupBy } from '../../../utils/global.utils';

// Types
import Types from './order-form.types';

// Actions
import * as Actions from './order-form.actions';

// Selectors
import {
	selectSelectedMenus,
	selectSelectedOrder,
} from './order-form.selectors';
import { selectCurrentMenus } from '../../menus/menus.selectors';

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

		yield put(Actions.selectMenuSuccess(newSelectedMenus));
	} catch (error) {
		console.log(error);
		yield put(Actions.selectMenuFailure(error));
	}
}

/* ================================================================ */
/*  Listeners                                                       */
/* ================================================================ */

export function* onSelectMenuStart() {
	yield takeLatest(Types.SELECT_MENU_START, selectMenuStart);
}

/* ================================================================ */
/*  Root Saga                                                       */
/* ================================================================ */

export default function* orderFormSagas() {
	yield all([call(onSelectMenuStart)]);
}
