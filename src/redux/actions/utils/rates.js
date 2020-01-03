import axios from 'axios';
import { UPDATE, DAY, TODAY, DAY_BEFORE, TWO_DAYS_BEFORE, TREE_DAYS_BEFORE, LAST_YEAR, FOUR_DAYS_BEFORE } from './date';
import insertEUR from './insertEUR';

const HISTORY = `https://api.exchangeratesapi.io/history?`;

export const GET_RATES = ({ 
  BASE,
  ERROR_TYPE,
  SUCCESS_TYPE,
  LOADING,
  LOADED
}) => {
  return async dispatch => {
    const onSuccess = success => {
      dispatch({ type: SUCCESS_TYPE, payload: success });
      dispatch({ type: LOADED, payload: false });
    };
    const onError = error => {
      dispatch({ type: ERROR_TYPE, payload: error });
      dispatch({ type: LOADED, payload: false });
    };
    try {
      dispatch({ type: LOADING, payload: true });
      let response;
      if(UPDATE) {
        response = await axios.get(`${HISTORY}start_at=${DAY_BEFORE}&end_at=${TODAY}&base=${BASE}`);
      } else {
        response = await axios.get(`${HISTORY}start_at=${TWO_DAYS_BEFORE}&end_at=${DAY_BEFORE}&base=${BASE}`);
      }
      if(DAY === 'Monday') {
        if(UPDATE) {
          response = await axios.get(`${HISTORY}start_at=${DAY_BEFORE}&end_at=${TODAY}&base=${BASE}`);
        } else {
          response = await axios.get(`${HISTORY}start_at=${FOUR_DAYS_BEFORE}&end_at=${TREE_DAYS_BEFORE}&base=${BASE}`);
        }
      }
      if(DAY === 'Sunday') {
        response = await axios.get(`${HISTORY}start_at=${TREE_DAYS_BEFORE}&end_at=${TWO_DAYS_BEFORE}&base=${BASE}`);
      }
      if(DAY === 'Saturday') {
        response = await axios.get(`${HISTORY}start_at=${TWO_DAYS_BEFORE}&end_at=${DAY_BEFORE}&base=${BASE}`);
      }
      const data = response.data;
      // If BASE === EUR insert EUR: 1
      const { success } = insertEUR({ data, BASE });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}

export const GET_RATES_LAST_YEAR = ({ 
  BASE,
  ENDPOINT,
  ERROR_TYPE,
  SUCCESS_TYPE,
  LOADING,
  LOADED
}) => {
  return async dispatch => {
    const onSuccess = success => {
      dispatch({ type: SUCCESS_TYPE, payload: success });
      dispatch({ type: LOADED, payload: false });
    };
    const onError = error => {
      dispatch({ type: ERROR_TYPE, payload: error });
      dispatch({ type: LOADED, payload: false });
    };
    try {
      dispatch({ type: LOADING, payload: true });
      const response = await axios.get(`${HISTORY}start_at=${LAST_YEAR}&end_at=${LAST_YEAR}&base=${BASE}`);
      const data = response.data;
      // If BASE === EUR insert EUR: 1
      const { success } = insertEUR({ data, BASE });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}