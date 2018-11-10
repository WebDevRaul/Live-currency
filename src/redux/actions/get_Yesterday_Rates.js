import axios from 'axios';
import { GET_YESTERDAY_RATES, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const get_Yesterday_Rates = (base, symbols, date) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`)
    .then(res => {
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}