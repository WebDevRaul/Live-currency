import { GET_FAKE_DATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LOADING:
    return {
      ...state,
      loading: true
    }
    case GET_FAKE_DATE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}