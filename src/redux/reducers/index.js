import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import getBaseRate from './getBaseRate';
import getBasicRates from './getBasicRates';
import getNewRatesReducer from './getNewRatesReducer';
import getYesterdayReducer from './getYesterdayReducer';

export default combineReducers({
  errors: errorReducer,
  baseRate: getBaseRate,
  baseRates: getBasicRates,
  newRate: getNewRatesReducer,
  yesterdayRate: getYesterdayReducer,
});