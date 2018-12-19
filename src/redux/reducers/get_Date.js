import { GET_DATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  today: {},
  yesterday: {},
  lastYear: {},
  oneDayBeforeYesterday: {},
  twoDaysBeforeYesterday: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_DATE:
      const today = new Date(action.payload).toISOString().slice(0,10);
      const yesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(action.payload)).toISOString().slice(0, 10);
      const oneDayBeforeYesterday = ( today => new Date(today.setDate(today.getDate() - 2)) )(new Date(action.payload)).toISOString().slice(0, 10);
      const twoDaysBeforeYesterday = ( today => new Date(today.setDate(today.getDate() - 3)) )(new Date(action.payload)).toISOString().slice(0, 10);
      const LastYear = new Date(action.payload).getFullYear() - 1;
      const lastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(action.payload)).toISOString().slice(0, 10);
      return {
        ...state,
        loading: false,
        today: today,
        yesterday: yesterday,
        lastYear: lastYear,
        oneDayBeforeYesterday: oneDayBeforeYesterday,
        twoDaysBeforeYesterday: twoDaysBeforeYesterday
      }
    default:
      return state;
  }
}