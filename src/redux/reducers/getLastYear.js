import { GET_LAST_YEAR, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  lastYearRate: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_LAST_YEAR:
      return {
        ...state,
        loading: false,
        lastYearRate: action.payload
      }

    default:
      return state;
  }
}