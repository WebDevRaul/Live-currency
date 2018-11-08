import axios from 'axios';
import {GET_COLLECT_DATA, GET_BASE, GET_DATE, GET_SELECT_RATE, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const collectData = () => dispatch => {
  dispatch(setLoading());
  axios
    .get('https://api.exchangeratesapi.io/latest?&base=GBP')
    .then(res => dispatch({
      type: GET_COLLECT_DATA,
      payload: res.data
    }))
    .then(res => dispatch({
      type: GET_BASE,
      payload: res.payload
    }))
    .then(res => dispatch({
      type: GET_DATE,
      payload: res.payload
    }))
    .then(res => dispatch({
      type: GET_SELECT_RATE,
      payload: res.payload.rates
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};