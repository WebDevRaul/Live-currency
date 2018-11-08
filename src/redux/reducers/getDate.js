import { GET_DATE } from '../actions/types';

const initialState = {
  loading: false,
  date: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
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