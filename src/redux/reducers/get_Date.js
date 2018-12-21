import { GET_DATE, GET_FAKE_DATE, GET_LOADING } from '../actions/types';

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
      const LastYear = new Date(action.payload).getFullYear() - 1;
      const lastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(action.payload)).toISOString().slice(0, 10);

      const twoDaysBeforeToday = ( today => new Date(today.setDate(today.getDate() - 2)) )(new Date(action.payload)).toISOString().slice(0, 10);
      return {
        ...state,
        loading: false,
        today: today,
        yesterday: yesterday,
        lastYear: lastYear,
        twoDaysBeforeToday: twoDaysBeforeToday,
      }
    case GET_FAKE_DATE:
      const todayTwo = new Date(action.payload).toISOString().slice(0,10);
      
      const oneDayBeforeYesterday = ( todayTwo => new Date(todayTwo.setDate(todayTwo.getDate() - 1)) )(new Date(todayTwo)).toISOString().slice(0, 10);
      console.log(oneDayBeforeYesterday, 'today')

      const twoDaysBeforeYesterday = ( todayTwo => new Date(todayTwo.setDate(todayTwo.getDate() - 2)) )(new Date(todayTwo)).toISOString().slice(0, 10);
      
      const oneDayBeforeLastYear = ( todayTwo => new Date(todayTwo.setFullYear(LastYear)) )(new Date(oneDayBeforeYesterday)).toISOString().slice(0, 10);
      
      return {
        ...state,
        loading: false,
        oneDayBeforeYesterday: oneDayBeforeYesterday,
        twoDaysBeforeYesterday: twoDaysBeforeYesterday,
        oneDayBeforeLastYear: oneDayBeforeLastYear
      }
    default:
      return state;
  }
}