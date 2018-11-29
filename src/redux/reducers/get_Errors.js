import { GET_ERRORS, GET_CLEAR_ERROR, GET_CLEAR_SEARCH_BAR } from '../actions/types';

const initialState = {
  errors: {
    number: {},
    searchBar: {}
  }
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case GET_CLEAR_SEARCH_BAR:
      return {
        searchBar: {}
      }
    case GET_CLEAR_ERROR:
      return {
        ...state,
        errors: {}
      };
    default:
      return state;
  }
}