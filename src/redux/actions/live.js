import { LIVE } from './types';
import { GET } from './utils/helper';

export const set_currency = () => GET({
  endpoint: 'https://api.exchangeratesapi.io/latest?base=GBP',
  SUCCESS_TYPE: LIVE.CURRENCY,
  ERROR_TYPE: LIVE.SET_ERROR,
  LOADING: LIVE.IS_LOADING,
  LOADED: LIVE.IS_LOADED,
});