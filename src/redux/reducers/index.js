import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import firstCallReducer from './firstCallReducer';
import submitRateReducer from './submitRateReducer';

export default combineReducers({
  errors: errorReducer,
  ratesData: firstCallReducer,
  rate: submitRateReducer
});