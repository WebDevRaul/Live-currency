import axios from 'axios';
import { GET_YESTERDAY_RATE, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const getYesterday = (base, newRates,) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/history?start_at=2018-10-29&end_at=2018-10-29&symbols=${newRates}&base=${base}`)
    .then(res => dispatch({
      type: GET_YESTERDAY_RATE,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};