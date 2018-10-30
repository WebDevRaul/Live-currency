import { GET_YESTERDAY_RATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  yesterdayRate: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_YESTERDAY_RATE:
      return {
        ...state,
        loading: false,
        yesterdayRate: action.payload
      }

    default:
      return state;
  }
}