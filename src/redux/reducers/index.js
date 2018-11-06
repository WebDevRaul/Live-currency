import { combineReducers } from 'redux';
import getSelect_Rate from './getSelect_Rate';
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
  selectRate: getSelect_Rate
});