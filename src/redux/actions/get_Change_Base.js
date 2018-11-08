import { GET_CHANGE_BASE } from './types';

export const get_Change_Base = base => dispatch => {
  dispatch({
    type: GET_CHANGE_BASE,
    payload: base
  })
};