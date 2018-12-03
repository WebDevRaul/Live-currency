import axios from 'axios';
import { GET_SET_CURRENCY, GET_ERRORS } from './types';


export const get_Set_Currency = (base, symbol) => dispatch => {
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`)
    .then(res => dispatch({
      type: GET_SET_CURRENCY,
      payload: Object.values(res.data.rates)[0].toFixed(4)
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}