import { GET_SYMBOLS } from '../actions/types';

const initialState = {
  loading: false,
  symbols: {}
};
export default function(state=initialState, action) {
  switch(action.type) {
    case GET_SYMBOLS:
      return {
        loading: false,
        symbols: action.payload
      }
    default:
      return state;
  }
}