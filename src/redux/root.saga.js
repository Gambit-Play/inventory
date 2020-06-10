import { all, call } from 'redux-saga/effects';

import usersSagas from './users/users.sagas';
import itemsSagas from './items/items.sagas';
import menusSagas from './menus/menus.sagas';
import unitsSagas from './units/units.sagas';
import tablesSagas from './tables/tables.sagas';
import categoriesSagas from './categories/categories.sagas';

import itemsTableSagas from './handlers/items-table/items-table.sagas';
import itemDetailSagas from './handlers/item-detail/item-detail.sagas';
import menusTableSagas from './handlers/menus-table/menus-table.sagas';
import menuDetailSagas from './handlers/menu-detail/menu-detail.sagas';
import categoriesTableSagas from './handlers/categories-table/categories-table.sagas';
import categoryDetailSagas from './handlers/category-detail/category-detail.sagas';
import tablesTableSagas from './handlers/tables-table/tables-table.sagas';
import tableDetailSagas from './handlers/table-detail/table-detail.sagas';
import orderFormSagas from './handlers/order-form/order-form.sagas';

export default function* rootSaga() {
	yield all([
		call(usersSagas),
		call(itemsSagas),
		call(menusSagas),
		call(unitsSagas),
		call(tablesSagas),
		call(categoriesSagas),
		call(itemsTableSagas),
		call(itemDetailSagas),
		call(menusTableSagas),
		call(menuDetailSagas),
		call(categoriesTableSagas),
		call(categoryDetailSagas),
		call(tablesTableSagas),
		call(tableDetailSagas),
		call(orderFormSagas),
	]);
}
