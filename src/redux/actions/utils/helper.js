import axios from 'axios';
import isEmpty from '../../../components/common/isEmpty/isEmpty';

export const SET = ({ 
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
      const response = await axios.get(`${ENDPOINT}`);
      const success = response.data;
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}

const date = new Date();

const getOneDayBefore = value => {
  const seconds = value.setDate(value.getDate() - 1);
  const date = new Date(seconds).toISOString().slice(0,10);
  return date;
};

const getTwoDaysBefore = value => {
  const seconds = value.setDate(value.getDate() - 1);
  const date = new Date(seconds).toISOString().slice(0,10);
  return date;
};

const getYear = value => {;
  const year = value.getFullYear() - 1;
  value.setFullYear(year);
  const last_year = value.toISOString().slice(0,10);
  return last_year;
}

export const TODAY = date.toISOString().slice(0,10);
export const DAY_BEFORE = getOneDayBefore(date);
export const TWO_DAYS_BEFORE = getTwoDaysBefore(date);
export const LAST_YEAR = getYear(date);