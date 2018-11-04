import { GET_NEW_RATE, GET_YESTERDAY_NEW_RATE, GET_LOADING, GET_LAST_YEAR } from '../actions/types';

const initialState = {
  loading: false,
  newRate: {},
  yesterdayNewRate: {},
  lastYearNewRate: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_NEW_RATE:
      return {
        ...state,
        loading: false,
        newRate: action.payload.rates
      }
    
    case GET_YESTERDAY_NEW_RATE:
      return {
        ...state,
        loading: false,
        yesterdayNewRate: action.payload
      }

    case GET_LAST_YEAR:
      return {
        ...state,
        loading: false,
        lastYearNewRate: action.payload
      }

    default:
      return state;
  }
}