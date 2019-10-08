import { SET, ERROR, CONVERTOR, LOADING } from './types';
import { GET } from './utils/helper';

export const set_currency = () => GET({
  endpoint: 'https://api.exchangeratesapi.io/latest?base=GBP',
  SUCCESS_TYPE: SET.CURRENCY,
  ERROR_TYPE: ERROR.SET_ERROR,
  LOADING: LOADING.IS_LOADING,
  LOADED: LOADING.IS_LOADED,
});
// custom set_currency to dispatch 2 types


export const update_currency = data => GET({
  endpoint: `https://api.exchangeratesapi.io/latest?base=${data}`,
  SUCCESS_TYPE: CONVERTOR.UPDATE,
  ERROR_TYPE: ERROR.SET_ERROR,
  LOADING: CONVERTOR.IS_LOADING_CONVERTOR,
  LOADED: CONVERTOR.IS_LOADED_CONVERTOR
})

export const set_from_base = data => ({
  type: CONVERTOR.FROM_BASE,
  payload: data
});

export const set_to_base = data => ({
  type: CONVERTOR.TO_BASE,
  payload: data
});