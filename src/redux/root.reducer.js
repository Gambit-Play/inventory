import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import uiReducer from './ui/ui.reducer';
import usersReducer from './users/users.reducer';
import itemsReducer from './items/items.reducer';
import unitsReducer from './units/units.reducer';
import itemsTableReducer from './handlers/items-table/items-table.reducer';
import itemDetailReducer from './handlers/item-detail/item-detail.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['ui', 'users', 'items', 'itemsTable', 'itemDetail', 'units'],
};

const rootReducer = combineReducers({
	ui: uiReducer,
	users: usersReducer,
	items: itemsReducer,
	units: unitsReducer,
	itemsTable: itemsTableReducer,
	itemDetail: itemDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
