import { combineReducers } from 'redux';
import get_Errors from './get_Errors';
import get_Select_Rate from './get_Select_Rate';
import get_Base from './get_Base';
import get_Date from './get_Date';
import get_Symbols from './get_Symbols';
import get_Today from './get_Today';
import get_Yesterday_Rates from './get_Yesterday_Rates';

export default combineReducers({
  errors: get_Errors,
  selectRate: get_Select_Rate,
  symbols: get_Symbols,
  date: get_Date,
  base: get_Base,
  today: get_Today,
  yesterday: get_Yesterday_Rates
});