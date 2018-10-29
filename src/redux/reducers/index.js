import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import getBaseListReducer from './getBaseListReducer';
import getBaseRatesReducer from './getBaseRatesReducer';

export default combineReducers({
  errors: errorReducer,
  baseList: getBaseListReducer,
  baseRates: getBaseRatesReducer
});