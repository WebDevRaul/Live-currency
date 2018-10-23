import { GET_SUBMIT_RATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  rate: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOADING:
    return {
      ...state,
      loading: true
    }

    case GET_SUBMIT_RATE:
      return {
        ...state,
        loading: false,
        rate: action.payload
      }

    default:
      return state  
  }
}