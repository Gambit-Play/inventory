import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import uiReducer from './ui/ui.reducer';
import usersReducer from './users/users.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['ui', 'users'],
};

const rootReducer = combineReducers({
	ui: uiReducer,
	users: usersReducer,
});

export default persistReducer(persistConfig, rootReducer);
