import { GET_SELECT_RATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  selectRate: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_SELECT_RATE:
      return {
        ...state,
        loading: false,
        selectRate: Object.keys(action.payload).map(i => i).sort()
      }
    default:
      return state;
  }
}