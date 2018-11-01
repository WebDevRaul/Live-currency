import { GET_BASE_RATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  baseRate: {},
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_BASE_RATE:
      return {
        ...state,
        loading: false,
        baseRate: action.payload.rates,
      }

    default:
      return state;
  } 
}