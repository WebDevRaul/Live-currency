import { GET_SET_CURRENCY } from '../actions/types';

const initialState = {
  loading: false,
  setCurrency: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_SET_CURRENCY:
      return {
        ...state,
        loading: false,
        setCurrency: action.payload
      }

    default:
      return state;
  }
}