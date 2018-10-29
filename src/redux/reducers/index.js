import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import getBaseListReducer from './getBaseListReducer';
import getBaseRatesReducer from './getBaseRatesReducer';
import getNewRatesReducer from './getNewRatesReducer';

export default combineReducers({
  errors: errorReducer,
  baseList: getBaseListReducer,
  baseRates: getBaseRatesReducer,
  newRate: getNewRatesReducer
});