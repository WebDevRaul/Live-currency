import axios from 'axios';
import { GET_SELECT_RATE, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

//Make request to exchangeratesapi.io for list base
export const getSelectRate = () => dispatch => {
  dispatch(setLoading());
  axios
    .get(`https://api.exchangeratesapi.io/latest`)
    .then(res => dispatch({
      type: GET_SELECT_RATE,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};