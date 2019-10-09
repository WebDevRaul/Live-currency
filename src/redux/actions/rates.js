import {  RATES } from './types';
import { SET, TODAY, DAY_BEFORE, LAST_YEAR } from './utils/helper';

export const set_rates = () => SET({
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${DAY_BEFORE}&end_at=${TODAY}&base=GBP`,
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
})

export const set_lastYear = () => SET({
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${LAST_YEAR}&end_at=${LAST_YEAR}&base=GBP`,
  SUCCESS_TYPE: RATES.UPDATE_LAST_YEAR,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
});

export const update_rates = BASE => SET({
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${DAY_BEFORE}&end_at=${TODAY}&base=${BASE}`,
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
});

export const update_lastYear = BASE => SET({
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${LAST_YEAR}&end_at=${LAST_YEAR}&base=${BASE}`,
  SUCCESS_TYPE: RATES.UPDATE_LAST_YEAR,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
});

export const set_from_base = data => ({
  type: RATES.FROM_RATES,
  payload: data
});