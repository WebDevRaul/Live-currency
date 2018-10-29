import { GET_BASE_LIST, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  baseList: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_BASE_LIST:
      return {
        ...state,
        loading: false,
        baseList: action.payload.rates
      }

    default:
      return state;
  } 
}