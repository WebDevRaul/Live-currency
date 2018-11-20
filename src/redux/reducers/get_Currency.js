import { GET_CURRENCY } from '../actions/types';

const initialState = {
  loading: false,
  currency: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        loading: false,
        currency: action.payload
      }

    default:
      return state;
  }
}