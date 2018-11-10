import { GET_BASE } from '../actions/types';

const initialState = {
  loading: false,
  base: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_BASE:
      return {
        ...state,
        loading: false,
        base: action.payload
      }
    default:
      return state;
  }
}