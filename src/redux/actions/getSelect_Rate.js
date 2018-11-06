import axios from 'axios';
import { GET_SELECT_RATE, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const getSelect_Rate = () => dispatch => {
  dispatch(setLoading());
  axios
    .get('https://api.exchangeratesapi.io/latest')
    .then(res => dispatch({
      type: GET_SELECT_RATE,
      payload: res.data.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data.rates
    }))
}