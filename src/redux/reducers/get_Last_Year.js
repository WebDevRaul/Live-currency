import { GET_LAST_YEAR } from '../actions/types';

const initialState = {
  loading: false,
  lastYear: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LAST_YEAR:
      return {
        loading: false,
        lastYear: action.payload
      }
    default:
      return state;
  }
}