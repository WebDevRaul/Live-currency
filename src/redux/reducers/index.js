import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import getBaseRate from './getBaseRate';
import getBaseRatesReducer from './getBaseRatesReducer';
import getNewRatesReducer from './getNewRatesReducer';
import getYesterdayReducer from './getYesterdayReducer';

export default combineReducers({
  errors: errorReducer,
  baseRate: getBaseRate,
  baseRates: getBaseRatesReducer,
  newRate: getNewRatesReducer,
  yesterdayRate: getYesterdayReducer,
});