import {
  GET_TODAY,
  GET_YESTERDAY,
  GET_LAST_YEAR,
  GET_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  today: {},
  yesterday: {},
  lastYear: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_TODAY:
      return {
        ...state,
        loading: false,
        today: Object.keys(action.payload).sort().reduce((obj, key) => ({...obj, [key]:action.payload[key]}),{})
      }
    case GET_YESTERDAY:
      return {
        ...state,
        loading: false,
        yesterday: Object.keys(action.payload).sort().reduce((obj, key)=>({...obj, [key]:action.payload[key]}),{})
      }
    case GET_LAST_YEAR:
      return {
        ...state,
        loading: false,
        lastYear: Object.keys(action.payload).sort().reduce((obj, key) => ({...obj, [key]:action.payload[key]}),{})
      }
    default:
      return state;
  }
}