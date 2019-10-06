import { GET_DATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  today: {},
  yesterday: {},
  lastYear: {},
  dayBeforeYesterday: {},
  dayBeforeLastYear: {},
  secondDayBeforeYesterday: {},
  secondDayBeforeLastYear: {}
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

      const dayBeforeYesterday = ( today => new Date(today.setDate(today.getDate() - 2)) )(new Date(action.payload)).toISOString().slice(0, 10);
      const dayBeforeLastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(yesterday)).toISOString().slice(0, 10);

      const secondDayBeforeYesterday = ( today => new Date(today.setDate(today.getDate() - 3)) )(new Date(action.payload)).toISOString().slice(0, 10);
      const secondDayBeforeLastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(dayBeforeYesterday)).toISOString().slice(0, 10);

      return {
        ...state,
        loading: false,
        today: today,
        yesterday: yesterday,
        lastYear: lastYear,
        dayBeforeYesterday: dayBeforeYesterday,
        dayBeforeLastYear: dayBeforeLastYear,
        secondDayBeforeYesterday: secondDayBeforeYesterday,
        secondDayBeforeLastYear: secondDayBeforeLastYear
      }
    default:
      return state;
  }
}