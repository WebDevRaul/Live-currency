import { GET_SET_TO_VAL } from '../actions/types';


const initialState = {
  loading: false,
  toVal: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_SET_TO_VAL:
      return {
        ...state,
        loading: false,
        toVal: action.payload
      }

    default:
      return state;
  }
};