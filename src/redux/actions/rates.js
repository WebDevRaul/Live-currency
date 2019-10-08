import {  RATES } from './types';
import { GET } from './utils/helper';

export const update_rates = data => GET({
  endpoint: `https://api.exchangeratesapi.io/latest?base=${data}`,
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
})

export const set_from_base = data => ({
  type: RATES.FROM_RATES,
  payload: data
});