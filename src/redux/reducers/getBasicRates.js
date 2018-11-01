import { GET_BASIC_RATES, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  basicRates: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_BASIC_RATES:
      return {
        ...state,
        loading: false,
        basicRates: action.payload.rates
      }
    
    default:
      return state;
  }
}