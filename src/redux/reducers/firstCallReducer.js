import { GET_FIRST_CALL, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  rates: {},
  date: undefined,
  base: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      };
    
    case GET_FIRST_CALL:
      return {
        ...state,
        loading: false,
        rates: action.payload.rates,
        date: action.payload.date,
        base: action.payload.base
      }

    default:
      return state;
  }
}
