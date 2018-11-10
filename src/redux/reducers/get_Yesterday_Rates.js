import { GET_YESTERDAY_RATES } from '../actions/types';

const initialState = {
  loading: false,
  yesterday: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_YESTERDAY_RATES:
      return {
        loading: false,
        yesterday: action.payload
      }
    default:
      return state;
  }
}