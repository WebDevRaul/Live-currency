import { GET_NEW_SYMBOLS } from './types';


export const get_New_Symbols = text => dispatch => {
  dispatch({
    type: GET_NEW_SYMBOLS,
    payload: text
  })
};