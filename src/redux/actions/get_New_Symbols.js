import { GET_NEW_SYMBOLS, GET_ERRORS } from './types';


export const get_New_Symbols = data => dispatch => {

  let text = data;
  text.trim();

  if (text.length === 0) {
    dispatch({
      type: GET_ERRORS,
      payload: { searchBar:'Enter a value here!' }
    })
  } else if (text.length > 3) {
    dispatch({
      type: GET_ERRORS,
      payload: {searchBar:'Enter a valid value!'}
    })
  } else if (text.length === 3) {
    dispatch({
      type: GET_NEW_SYMBOLS,
      payload: text
    })
  }
};