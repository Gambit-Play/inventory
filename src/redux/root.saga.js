import { all, call } from 'redux-saga/effects';

import usersSagas from './users/users.sagas';
import itemsSagas from './items/items.sagas';
import menusSagas from './menus/menus.sagas';
import unitsSagas from './units/units.sagas';
import itemsTableSagas from './handlers/items-table/items-table.sagas';
import itemDetailSagas from './handlers/item-detail/item-detail.sagas';
import menusTableSagas from './handlers/menus-table/menus-table.sagas';
import menuDetailSagas from './handlers/menu-detail/menu-detail.sagas';

export default function* rootSaga() {
	yield all([
		call(usersSagas),
		call(itemsSagas),
		call(menusSagas),
		call(unitsSagas),
		call(itemsTableSagas),
		call(itemDetailSagas),
		call(menusTableSagas),
		call(menuDetailSagas),
	]);
}
