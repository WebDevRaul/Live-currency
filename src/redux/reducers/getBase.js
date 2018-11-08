import { GET_BASE } from '../actions/types';

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