import {  RATES } from './types';
import { GET_RATES, GET_RATES_LAST_YEAR } from './utils/rates';

export const set_rates = () => GET_RATES({
  BASE: 'GBP',
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
})

export const update_rates = BASE => GET_RATES({
  BASE: BASE,
  SUCCESS_TYPE: RATES.UPDATE,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_RATES,
  LOADED: RATES.LOADED_RATES
});

export const set_lastYear = () => GET_RATES_LAST_YEAR({
  BASE: 'GBP',
  SUCCESS_TYPE: RATES.UPDATE_LAST_YEAR,
  ERROR_TYPE: RATES.ERROR,
  LOADING: RATES.LOADING_LAST_YEAR,
  LOADED: RATES.LOADED_LAST_YEAR
});

export const update_lastYear = BASE => GET_RATES_LAST_YEAR({
  BASE: BASE,
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