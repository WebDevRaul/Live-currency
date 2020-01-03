import axios from 'axios';
import { UPDATE, DAY, TODAY, DAY_BEFORE, TWO_DAYS_BEFORE, TREE_DAYS_BEFORE } from './date';

const HISTORY = `https://api.exchangeratesapi.io/history?`;

export const GET = ({ 
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
      let day
      if(UPDATE) {
        response = await axios.get(`${HISTORY}start_at=${TODAY}&end_at=${TODAY}&base=${BASE}`);
        day = TODAY;
      } else {
        response = await axios.get(`${HISTORY}start_at=${DAY_BEFORE}&end_at=${DAY_BEFORE}&base=${BASE}`);
        day = DAY_BEFORE;
      }
      if(DAY === 'Monday') {
        if(UPDATE) {
          response = await axios.get(`${HISTORY}start_at=${TODAY}&end_at=${TODAY}&base=${BASE}`);
          day = TODAY;
        } else {
          response = await axios.get(`${HISTORY}start_at=${TREE_DAYS_BEFORE}&end_at=${TREE_DAYS_BEFORE}&base=${BASE}`);
          day = TREE_DAYS_BEFORE;
        }
      }
      if(DAY === 'Sunday') {
        response = await axios.get(`${HISTORY}start_at=${TWO_DAYS_BEFORE}&end_at=${TWO_DAYS_BEFORE}&base=${BASE}`);
        day = TWO_DAYS_BEFORE;
      }
      if(DAY === 'Saturday') {
        response = await axios.get(`${HISTORY}start_at=${DAY_BEFORE}&end_at=${DAY_BEFORE}&base=${BASE}`);
        day = DAY_BEFORE;
      }
      const data = { rates: response.data.rates[day], date: day, base: BASE };

      // If BASE === EUR insert EUR: 1
      const success = BASE === 'EUR' ? {...data, rates: {...data.rates, EUR: 1}} : data;
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}