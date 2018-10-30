import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import getBaseListReducer from './getBaseListReducer';
import getBaseRatesReducer from './getBaseRatesReducer';
import getNewRatesReducer from './getNewRatesReducer';
import getYesterdayReducer from './getYesterdayReducer';

export default combineReducers({
  errors: errorReducer,
  baseList: getBaseListReducer,
  baseRates: getBaseRatesReducer,
  newRate: getNewRatesReducer,
  yesterdayRate: getYesterdayReducer
});