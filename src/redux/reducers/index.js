import { combineReducers } from 'redux';
import getSelect_Rate from './getSelect_Rate';
import get_Change_Base from './get_Change_Base';
import getBase from './getBase';
import getDate from './getDate';
import get_Today_Rates from './get_Today_Rates';
// import errorReducer from './errorReducer';
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
  base: getBase,
  date: getDate,
  selectRate: getSelect_Rate,
  changeBase: get_Change_Base,
  todayRates: get_Today_Rates
});