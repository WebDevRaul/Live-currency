import { GET_SET_FROM_VAL, GET_ERRORS } from './types';

//Clear Error
import { get_Clear_Error } from './commonAction';

export const get_Set_From_Val = data => dispatch => {
  if (isNaN(data)) {
    dispatch({
      type: GET_ERRORS,
      payload: {number: 'That is not a Number'}
    })
  } else {
    dispatch(get_Clear_Error());
    dispatch({
      type: GET_SET_FROM_VAL,
      payload: data
    })
  }
};