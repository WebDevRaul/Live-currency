import { GET_EXCHANGE_TODAY, GET_EXCHANGE_NEW_TODAY, GET_EXCHANGE_YESTERDAY, GET_EXCHANGE_LAST_YEAR, GET_EXCHANGE_NEW_YESTERDAY, GET_EXCHANGE_NEW_LAST_YEAR} from '../actions/types';

const initialState = {
  today: '',
  yesterday: '',
  lastYear: '',
  newToday: '',
  newYesterday: '',
  newLastYear: ''
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_EXCHANGE_TODAY:
      return {
        ...state,
        today: action.payload
      }
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
    case GET_EXCHANGE_NEW_TODAY:
      return {
        ...state,
        newToday: action.payload
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