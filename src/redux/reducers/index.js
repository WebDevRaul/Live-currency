import { combineReducers } from 'redux';
import get_Select_Rate from './get_Select_Rate';
import get_Base from './get_Base';
import get_Date from './get_Date';
import get_Today_Rates from './get_Today_Rates';
import errorReducer from './errorReducer';
// import getSelectRate from './getSelectRate';
// import getBasicRates from './getBasicRates';
// import getNewRates from './getNewRates';
// import getYesterday from './getYesterday';
// import getLastYear from './getLastYear';

export default combineReducers({
  // errors: errorReducer,
  // selectRate: getSelectRate,
  // basicRates: getBasicRates,
  // newRate: getNewRates,
  // yesterdayRate: getYesterday,
  // lastYearRate: getLastYear,
  errors: errorReducer,
  selectRate: get_Select_Rate,
  base: get_Base,
  date: get_Date,
  todayRates: get_Today_Rates
});