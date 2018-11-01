import axios from 'axios';
import { GET_BASIC_RATES, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const getBasicRates = (base, symbols) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
    .then(res => dispatch({
      type: GET_BASIC_RATES,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};