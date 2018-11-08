import axios from 'axios';
import {GET_COLLECT_DATA, GET_BASE, GET_DATE, GET_ERRORS } from './types';

//import Loading action
import { setLoading } from './commonAction';

export const collectData = () => dispatch => {
  dispatch(setLoading());
  axios
    .get()
    .then()
    .catch()
};