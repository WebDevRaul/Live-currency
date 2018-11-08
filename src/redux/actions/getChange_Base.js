import { GET_CHANGE_BASE } from './types';

export const getChange_Base = base => dispatch => {
  dispatch({
    type: GET_CHANGE_BASE,
    payload: base
  })
};