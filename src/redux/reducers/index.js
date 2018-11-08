import { combineReducers } from 'redux';
import getSelect_Rate from './getSelect_Rate';
import getChange_Base from './getChange_Base';
import getBase from './getBase';
import getDate from './getDate';
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
  changeBase: getChange_Base
});