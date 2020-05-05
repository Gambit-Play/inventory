import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import uiReducer from './ui/ui.reducer';
import usersReducer from './users/users.reducer';
import itemsReducer from './items/items.reducer';
import itemsTableReducer from './handlers/items-table/items-table.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['ui', 'users', 'items', 'itemsTable'],
};

const rootReducer = combineReducers({
	ui: uiReducer,
	users: usersReducer,
	items: itemsReducer,
	itemsTable: itemsTableReducer,
});

export default persistReducer(persistConfig, rootReducer);
