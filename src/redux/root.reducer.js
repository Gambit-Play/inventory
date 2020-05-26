import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import uiReducer from './ui/ui.reducer';
import usersReducer from './users/users.reducer';
import itemsReducer from './items/items.reducer';
import unitsReducer from './units/units.reducer';
import menusReducer from './menus/menus.reducer';
import tablesReducer from './tables/tables.reducer';
import categoriesReducer from './categories/categories.reducer';
import itemsTableReducer from './handlers/items-table/items-table.reducer';
import itemDetailReducer from './handlers/item-detail/item-detail.reducer';
import menusTableReducer from './handlers/menus-table/menus-table.reducer';
import menuDetailReducer from './handlers/menu-detail/menu-detail.reducer';
import categoriesTableReducer from './handlers/categories-table/categories-table.reducer';
import categoryDetailReducer from './handlers/category-detail/category-detail.reducer';

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
		'categoriesTable',
		'categoryDetail',
		'tables',
	],
};

const rootReducer = combineReducers({
	ui: uiReducer,
	users: usersReducer,
	units: unitsReducer,
	items: itemsReducer,
	menus: menusReducer,
	tables: tablesReducer,
	categories: categoriesReducer,

	// Handlers Reducers
	itemsTable: itemsTableReducer,
	itemDetail: itemDetailReducer,
	menusTable: menusTableReducer,
	menuDetail: menuDetailReducer,
	categoriesTable: categoriesTableReducer,
	categoryDetail: categoryDetailReducer,
});

export default persistReducer(persistConfig, rootReducer);
