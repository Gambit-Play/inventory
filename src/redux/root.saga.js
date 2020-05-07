import { all, call } from 'redux-saga/effects';

import usersSagas from './users/users.sagas';
import itemsagas from './items/items.sagas';
import itemsTableSagas from './handlers/items-table/items-table.sagas';
import itemDetailSagas from './handlers/item-detail/item-detail.sagas';

export default function* rootSaga() {
	yield all([
		call(usersSagas),
		call(itemsagas),
		call(itemsTableSagas),
		call(itemDetailSagas),
	]);
}
