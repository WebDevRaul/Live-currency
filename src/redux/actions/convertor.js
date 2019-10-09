import {  CONVERTOR } from './types';
import { SET } from './utils/helper';

export const set_convertor = () => SET({
  ENDPOINT: 'https://api.exchangeratesapi.io/latest?base=GBP',
  SUCCESS_TYPE: CONVERTOR.SET,
  ERROR_TYPE: CONVERTOR.ERROR,
  LOADING: CONVERTOR.LOADING_CONVERTOR,
  LOADED: CONVERTOR.LOADED_CONVERTOR
});

export const update_convertor = data => SET({
  ENDPOINT: `https://api.exchangeratesapi.io/latest?base=${data}`,
  SUCCESS_TYPE: CONVERTOR.UPDATE,
  ERROR_TYPE: CONVERTOR.ERROR,
  LOADING: CONVERTOR.LOADING_CONVERTOR,
  LOADED: CONVERTOR.LOADED_CONVERTOR
})

export const set_from_base = data => ({
  type: CONVERTOR.FROM_BASE,
  payload: data
});

export const set_to_base = data => ({
  type: CONVERTOR.TO_BASE,
  payload: data
});