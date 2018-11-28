import axios from 'axios';
import { GET_UPDATE_CURRENCY, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';


export const get_Update_Currency = (base, symbol, val) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`)
    .then(res => dispatch({
      type: GET_UPDATE_CURRENCY,
      payload: Object.values(res.data.rates)[0].toFixed(4) * parseInt(val)
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};