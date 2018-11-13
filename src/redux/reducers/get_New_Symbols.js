import { GET_NEW_SYMBOLS } from '../actions/types';

const initialState = {
  loading: false,
  newSymbols: []
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_NEW_SYMBOLS:
      return {
        ...state,
        loading: false,
        newSymbols: [...state.newSymbols, action.payload]
      }
    default:
      return state;
  }
}