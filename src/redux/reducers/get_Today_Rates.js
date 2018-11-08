import { GET_TODAY_RATES } from '../actions/types';

const initialState = {
  loading: false,
  todayRates: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_TODAY_RATES:
      return {
        ...state,
        loading: false,
        todayRates: action.payload.rates
      }
    default:
      return state;
  }
}