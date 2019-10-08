import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import convertor from './convertor';
import rates from './rates';
import live from './live';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'website-builder']
};

const rootReducer = combineReducers({
  convertor,
  rates,
  live
});

export default persistReducer(persistConfig, rootReducer);