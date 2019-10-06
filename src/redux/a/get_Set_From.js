import { GET_SET_FROM } from '../actions/types';

export const get_Set_From = data => {
  return {
    type: GET_SET_FROM,
    payload: data
  };
};