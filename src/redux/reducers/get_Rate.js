import {
  GET_TODAY,
  GET_YESTERDAY,
  GET_LAST_YEAR
} from '../actions/types';

const initialState = {
  loading: false,
  today: {},
  yesterday: {},
  lastYear: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_TODAY:
      return {
        ...state,
        loading: false,
        today: action.payload
      }
    case GET_YESTERDAY:
      return {
        ...state,
        loading: false,
        yesterday: action.payload
      }
    case GET_LAST_YEAR:
      return {
        ...state,
        loading: false,
        lastYear: action.payload
      }
    default:
      return state;
  }
}