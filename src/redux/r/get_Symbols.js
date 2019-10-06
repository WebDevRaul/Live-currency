import { GET_SYMBOLS, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  symbols: {}
};
export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_SYMBOLS:
      return {
        loading: false,
        symbols: action.payload
      }
    default:
      return state;
  }
}