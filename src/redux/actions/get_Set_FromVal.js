import { GET_SET_FROM_VAL, GET_ERRORS } from './types';


export const get_Set_From_Val = data => dispatch => {
  if (isNaN(data)) {
    dispatch({
      type: GET_ERRORS,
      payload: {number: 'That is not a Number'}
    })
  } else if (data === '') {
    dispatch({
      type: GET_ERRORS,
      payload: {number: 'Enter a Number'}
    })
    dispatch({
      type: GET_SET_FROM_VAL,
      payload: data
    })
  } else {
    dispatch({
      type: GET_SET_FROM_VAL,
      payload: data
    })
  }
};