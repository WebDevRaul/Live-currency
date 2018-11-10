import { GET_TODAY } from '../actions/types';

const initialState = {
  loading: false,
  today: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_TODAY:
      return {
        loading: false,
        today: action.payload
      }
    default:
      return state;
  }
}