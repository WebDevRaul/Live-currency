import { GET_BASE } from '../actions/types';

export const get_Change_Base = base => dispatch => {
  dispatch({
    type: GET_BASE,
    payload: base
  })
};