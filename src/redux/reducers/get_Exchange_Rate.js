import { GET_EXCHANGE_TODAY, GET_EXCHANGE_NEW_TODAY} from '../actions/types';

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
      case GET_EXCHANGE_NEW_TODAY:
      return {
        ...state,
        newToday: action.payload
      }
    default:
      return state
  }
}