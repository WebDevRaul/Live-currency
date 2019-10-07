import axios from 'axios';
import { LOADING } from '../types';

export const GET = ({ 
  endpoint,
  ERROR_TYPE,
  SUCCESS_TYPE
}) => {
  return async dispatch => {
    const onSuccess = success => {
      dispatch({ type: SUCCESS_TYPE, payload: success });
      dispatch({ type: LOADING.IS_LOADED, payload: false });
    };
    const onError = error => {
      dispatch({ type: ERROR_TYPE, payload: error });
      dispatch({ type: LOADING.IS_LOADED, payload: false });
    };
    try {
      dispatch({ type: LOADING.IS_LOADING, payload: true });
      const response = await axios.get(`${endpoint}`);
      const success = response.data;
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}