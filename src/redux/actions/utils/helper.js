import axios from 'axios';

export const GET = ({ 
  endpoint,
  ERROR_TYPE,
  SUCCESS_TYPE
}) => {
  return async dispatch => {
    const onSuccess = success => {
      dispatch({ type: SUCCESS_TYPE, payload: success });
    };
    const onError = error => {
      dispatch({ type: ERROR_TYPE, payload: error });
    };
    try {
      const response = await axios.get(`${endpoint}`);
      const success = response.data
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  }
}