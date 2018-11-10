import { GET_BASE, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  base: []
};

export default function(state= initialState, actions) {
  switch(actions.type) {
    case GET_LOADING: 
    return {
      ...state,
      loading: true
    }
    case GET_BASE: 
      return {
        ...state,
        base: actions.payload
      }

    default:
      return state;
  }
}