import { GET_NEW_RATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  newRate: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_NEW_RATE:
      return {
        ...state,
        loading: false,
        newRate: action.payload
      }

    default:
      return state;
  }
}