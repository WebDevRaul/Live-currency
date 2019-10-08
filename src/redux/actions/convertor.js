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

export const set_from_base = data => ({
  type: SET.FROM_BASE,
  payload: data
});

export const set_to_base = data => ({
  type: SET.TO_BASE,
  payload: data
});