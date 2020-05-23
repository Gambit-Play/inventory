import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import uiReducer from './ui/ui.reducer';
import usersReducer from './users/users.reducer';
import itemsReducer from './items/items.reducer';
import unitsReducer from './units/units.reducer';
import menusReducer from './menus/menus.reducer';
import categoriesReducer from './categories/categories.reducer';
import itemsTableReducer from './handlers/items-table/items-table.reducer';
import itemDetailReducer from './handlers/item-detail/item-detail.reducer';
import menusTableReducer from './handlers/menus-table/menus-table.reducer';
import menuDetailReducer from './handlers/menu-detail/menu-detail.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'ui',
		'users',
		'units',
		'items',
		'itemsTable',
		'itemDetail',
		'menus',
		'menusTable',
		'menuDetail',
		'categories',
	],
};

const rootReducer = combineReducers({
	ui: uiReducer,
	users: usersReducer,
	units: unitsReducer,
	items: itemsReducer,
	menus: menusReducer,
	categories: categoriesReducer,
	itemsTable: itemsTableReducer,
	itemDetail: itemDetailReducer,
	menusTable: menusTableReducer,
	menuDetail: menuDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
