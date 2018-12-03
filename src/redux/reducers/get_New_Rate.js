import { 
  GET_NEW_RATE_TODAY, 
  GET_NEW_RATE_YESTERDAY, 
  GET_NEW_RATE_LAST_YEAR,
 } from '../actions/types';

const initialState = {
  loading: false,
  newRateToday: {},
  newRateYesterday: {},
  newRateLastYear: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_NEW_RATE_TODAY:
      return {
        ...state,
        loading: false,
        newRateToday: action.payload
      }
    case GET_NEW_RATE_YESTERDAY:
      return {
        ...state,
        loading: false,
        newRateYesterday: action.payload  
      }
    case GET_NEW_RATE_LAST_YEAR:
      return {
        ...state,
        loading: false,
        newRateLastYear: action.payload
      }
    default:
      return state;
  }
}