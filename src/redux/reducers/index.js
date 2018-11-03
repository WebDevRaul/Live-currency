import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import getSelectRate from './getSelectRate';
import getBasicRates from './getBasicRates';
import getNewRatesReducer from './getNewRates';
import getYesterdayReducer from './getYesterday';

export default combineReducers({
  errors: errorReducer,
  selectRate: getSelectRate,
  basicRates: getBasicRates,
  newRate: getNewRatesReducer,
  yesterdayRate: getYesterdayReducer,
});