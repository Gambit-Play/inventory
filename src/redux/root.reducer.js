import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import uiReducer from './ui/ui.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['ui'],
};

const rootReducer = combineReducers({
	ui: uiReducer,
});

export default persistReducer(persistConfig, rootReducer);
