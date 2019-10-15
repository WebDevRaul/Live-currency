import {  RATES } from './types';
import { GET_RATES, GET_RATES_LAST_YEAR } from './utils/rates';
import { TODAY, DAY_BEFORE, LAST_YEAR } from './utils/date';

export const set_rates = () => GET_RATES({
  BASE: 'GBP',
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${DAY_BEFORE}&end_at=${TODAY}`,
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
})

export const update_rates = BASE => GET_RATES({
  BASE: BASE,
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${DAY_BEFORE}&end_at=${TODAY}`,
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
});

export const set_lastYear = () => GET_RATES_LAST_YEAR({
  BASE: 'GBP',
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${LAST_YEAR}&end_at=${LAST_YEAR}`,
  SUCCESS_TYPE: RATES.UPDATE_LAST_YEAR,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_LAST_YEAR,
  LOADED: RATES.LOADED_LAST_YEAR
});

export const update_lastYear = BASE => GET_RATES_LAST_YEAR({
  BASE: BASE,
  ENDPOINT: `https://api.exchangeratesapi.io/history?start_at=${LAST_YEAR}&end_at=${LAST_YEAR}`,
  SUCCESS_TYPE: RATES.UPDATE_LAST_YEAR,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_LAST_YEAR,
  LOADED: RATES.LOADED_LAST_YEAR
});


export const set_from_base = data => ({
  type: RATES.FROM_RATES,
  payload: data
});

export const add_rate = data => ({
  type: RATES.ADD_RATE,
  payload: data
})