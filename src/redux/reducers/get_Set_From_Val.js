import { GET_SET_FROM_VAL } from '../actions/types';


const initialState = {
  loading: false,
  fromVal: '1'
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_SET_FROM_VAL:
      return {
        ...state,
        loading: false,
        fromVal: action.payload
      }

    default:
      return state;
  }
};