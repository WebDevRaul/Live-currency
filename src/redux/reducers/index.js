import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import live from './live';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};

const rootReducer = combineReducers({
  live
});

export default persistReducer(persistConfig, rootReducer);