import { GET_SYMBOLS, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  symbols: {}
};
export default function(state=initialState, action) {
  switch(action.type) {
    case GET_SYMBOLS:
      return {
        loading: false,
        today: Object.keys(action.payload).map(i => i)
      }
    default:
      return state;
  }
}