import { GET_FAKE_DATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  firstToday: {},
  firstYesterday: {},
  firstLastYear: {}
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LOADING:
    return {
      ...state,
      loading: true
    }
    case GET_FAKE_DATE:
      const fakeToday = new Date(action.payload).toISOString().slice(0,10);
      const fakeYesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(action.payload)).toISOString().slice(0, 10);
      const fakeLastYear = new Date(action.payload).getFullYear() - 1;
      const fakelastYear = ( today => new Date(today.setFullYear(fakeLastYear)) )(new Date(action.payload)).toISOString().slice(0, 10);

      return {
        ...state,
        loading: false,
        firstToday: fakeToday,
        firstYesterday: fakeYesterday,
        firstLastYear: fakelastYear,
      }
    default:
      return state;
  }
}