import { GET_FAKE_DATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  firstToday: {},

}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LOADING:
    return {
      ...state,
      loading: true
    }
    case GET_FAKE_DATE:
    console.log('test')
      // const today = new Date(action.payload).toISOString().slice(0,10);
      // const yesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(action.payload)).toISOString().slice(0, 10);
      // const LastYear = new Date(action.payload).getFullYear() - 1;
      // const lastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(action.payload)).toISOString().slice(0, 10);

      return {
        ...state,
        loading: false,
        firstToday: action.payload
        // today: today,
        // yesterday: yesterday,
        // lastYear: lastYear,
      }
    default:
      return state;
  }
}