import { GET_BASE_RATES, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  baseRates: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_BASE_RATES:
      return {
        ...state,
        loading: false,
        baseRates: action.payload.rates
      }
    
    default:
      return state;
  }
}