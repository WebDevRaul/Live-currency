import axios from 'axios';
import { GET_CURRENCY, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const get_Currency = (base, symbol) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`)
    .then(res => dispatch({
      type: GET_CURRENCY,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}