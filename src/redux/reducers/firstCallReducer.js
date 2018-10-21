import { GET_FIRST_CALL, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  firstData: {}
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
        loading: false,
        firstData: action.payload
      }

    default:
      return state;
  }
}
