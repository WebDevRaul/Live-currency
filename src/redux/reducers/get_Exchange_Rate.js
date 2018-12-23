import {GET_EXCHANGE_YESTERDAY, GET_EXCHANGE_LAST_YEAR, GET_EXCHANGE_NEW_YESTERDAY, GET_EXCHANGE_NEW_LAST_YEAR} from '../actions/types';

const initialState = {
  yesterday: '',
  lastYear: '',
  newYesterday: '',
  newLastYear: ''
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_EXCHANGE_YESTERDAY:
      return {
        ...state,
        yesterday: action.payload
      }
    case GET_EXCHANGE_LAST_YEAR:
      return {
        ...state,
        lastYear: action.payload
      }
    case GET_EXCHANGE_NEW_YESTERDAY:
      return {
        ...state,
        newYesterday: action.payload
      }
    case GET_EXCHANGE_NEW_LAST_YEAR:
      return {
        ...state,
        newLastYear: action.payload
      }
    default:
      return state
  }
}