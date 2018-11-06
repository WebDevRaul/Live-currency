import { GET_BASE } from './types';

export const getBase = base => dispatch => {
  dispatch({
    type: GET_BASE,
    payload: base
  })
};