import { GET_DATE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  date: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING: 
    return {
      ...state,
      loading: true
    }
    case GET_DATE:
      return {
        ...state,
        loading: false,
        date: action.payload.date
      }
    
    default:
      return state;
  }
}