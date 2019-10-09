import {  RATES } from './types';
import { SET, TODAY, DAY_BEFORE } from './utils/helper';

export const set_rates = () => SET({
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${DAY_BEFORE}&end_at=${TODAY}&base=GBP`,
  SUCCESS_TYPE: RATES.SET,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
})

export const update_rates = BASE => SET({
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${DAY_BEFORE}&end_at=${TODAY}&base=${BASE}`,
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
});

export const set_from_base = data => ({
  type: RATES.FROM_RATES,
  payload: data
});