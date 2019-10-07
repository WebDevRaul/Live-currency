import { SET, ERROR } from './types';
import { GET } from './utils/helper';

export const set_currency = () => GET({
  endpoint: 'https://api.exchangeratesapi.io/latest?base=GBP',
  SUCCESS_TYPE: SET.CURRENCY,
  ERROR_TYPE: ERROR.SET_ERROR
});

export const update_currency = data => GET({
  endpoint: `https://api.exchangeratesapi.io/latest?base=${data}`,
  SUCCESS_TYPE: SET.CURRENCY,
  ERROR_TYPE: ERROR.SET_ERROR,

})

export const set_from = data => ({
  type: SET.FROM,
  payload: data
});

export const set_to = data => ({
  type: SET.TO,
  payload: data
});