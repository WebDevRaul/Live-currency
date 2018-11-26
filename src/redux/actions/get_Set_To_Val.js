import { GET_SET_TO_VAL } from './types';


export const get_Set_To_Val = data => {
  return {
    type: GET_SET_TO_VAL,
    payload: data
  };
};