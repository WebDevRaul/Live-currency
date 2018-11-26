import { GET_SET_FROM } from './types';

export const get_Set_From = data => {
  return {
    type: GET_SET_FROM,
    payload: data
  };
};