import { GET_YESTERDAY } from '../actions/types';

const initialState = {
  loading: false,
  yesterday: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_YESTERDAY:
      return {
        loading: false,
        yesterday: action.payload
      }
    default:
      return state;
  }
}