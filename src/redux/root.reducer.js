import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import uiReducer from './ui/ui.reducer';
import usersReducer from './users/users.reducer';
import itemsReducer from './items/items.reducer';
import unitsReducer from './units/units.reducer';
import menusReducer from './menus/menus.reducer';
import ordersReducer from './orders/orders.reducer';
import tablesReducer from './tables/tables.reducer';
import categoriesReducer from './categories/categories.reducer';
import itemsTableReducer from './handlers/items-table/items-table.reducer';
import itemDetailReducer from './handlers/item-detail/item-detail.reducer';
import menusTableReducer from './handlers/menus-table/menus-table.reducer';
import menuDetailReducer from './handlers/menu-detail/menu-detail.reducer';
import categoriesTableReducer from './handlers/categories-table/categories-table.reducer';
import categoryDetailReducer from './handlers/category-detail/category-detail.reducer';
import tablesTableReducer from './handlers/tables-table/tables-table.reducer';
import tableDetailReducer from './handlers/table-detail/table-detail.reducer';
import orderFormReducer from './handlers/order-form/order-form.reducer';
import ordersListReducer from './handlers/orders-list/orders-list.reducer';
import ordersTableReducer from './handlers/orders-table/orders-table.reducer';

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
		'tablesTable',
		'tableDetail',
		'orderForm',
		'orders',
		'ordersList',
		'ordersTable',
	],
};

const rootReducer = combineReducers({
	ui: uiReducer,
	users: usersReducer,
	units: unitsReducer,
	items: itemsReducer,
	menus: menusReducer,
	orders: ordersReducer,
	tables: tablesReducer,
	categories: categoriesReducer,

	// Handlers Reducers
	itemsTable: itemsTableReducer,
	itemDetail: itemDetailReducer,
	menusTable: menusTableReducer,
	menuDetail: menuDetailReducer,
	categoriesTable: categoriesTableReducer,
	categoryDetail: categoryDetailReducer,
	tablesTable: tablesTableReducer,
	tableDetail: tableDetailReducer,
	orderForm: orderFormReducer,
	ordersList: ordersListReducer,
	ordersTable: ordersTableReducer,
});

export default persistReducer(persistConfig, rootReducer);
