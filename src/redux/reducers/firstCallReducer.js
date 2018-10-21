import { GET_FIRST_CALL, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  data: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      };
    
    case GET_FIRST_CALL:
      return {
        ...state,
        data: action.payload,
        loading: false
      }

    default:
      return state;
  }
}
