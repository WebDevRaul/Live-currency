import { GET_ARROW_TODAY, GET_ARROW_YESTERDAY } from '../actions/types';

const initialState = {
  loading: false,
  today: [],
  yesterday: []
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_ARROW_TODAY:
      return {
        ...state,
        loading: false,
        today: [...state.today, action.payload]
      }
    case GET_ARROW_YESTERDAY:
      return {
        ...state,
        loading: false,
        yesterday: [...state.yesterday, action.payload]
      }
    default:
      return state;
  }
};