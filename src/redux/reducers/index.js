import { combineReducers } from 'redux';
import get_Errors from './get_Errors';
import get_Select_Rate from './get_Select_Rate';
import get_Base from './get_Base';
import get_Date from './get_Date';
import get_Symbols from './get_Symbols';
import get_New_Symbols from './get_New_Symbols';
import get_New_Rate from './get_New_Rate';
import get_Rate from './get_Rate';
import get_Set_From from './get_Set_From';
import get_Set_To from './get_Set_To';
import get_Set_Currency from './get_Set_Currency';
import get_Set_From_Val from './get_Set_From_Val';
import get_Set_To_Val from './get_Set_To_Val';

export default combineReducers({
  errors: get_Errors,
  selectRate: get_Select_Rate,
  date: get_Date,
  base: get_Base,
  symbols: get_Symbols,
  newSymbols: get_New_Symbols,
  rate: get_Rate,
  newRate: get_New_Rate,
  from: get_Set_From,
  to: get_Set_To,
  fromVal: get_Set_From_Val,
  toVal: get_Set_To_Val,
  setCurrency: get_Set_Currency,
});