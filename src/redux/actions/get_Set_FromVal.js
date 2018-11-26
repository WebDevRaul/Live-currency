import { GET_SET_FROM_VAL } from './types';


export const get_Set_From_Val = data => {
  return {
    type: GET_SET_FROM_VAL,
    payload: data
  };
};