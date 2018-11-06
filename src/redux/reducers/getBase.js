import { GET_BASE, GET_ERRORS } from '../actions/types';

const initialState = {
  base: []
};

export default function(state= initialState, actions) {
  switch(actions.type) {
    case GET_BASE: 
      return {
        ...state,
        base: actions.payload
      }

    default:
      return state;
  }
}