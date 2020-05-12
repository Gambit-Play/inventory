import { all, call } from 'redux-saga/effects';

import usersSagas from './users/users.sagas';
import itemsSagas from './items/items.sagas';
import unitsSagas from './units/units.sagas';
import itemsTableSagas from './handlers/items-table/items-table.sagas';
import itemDetailSagas from './handlers/item-detail/item-detail.sagas';

export default function* rootSaga() {
	yield all([
		call(usersSagas),
		call(itemsSagas),
		call(unitsSagas),
		call(itemsTableSagas),
		call(itemDetailSagas),
	]);
}
