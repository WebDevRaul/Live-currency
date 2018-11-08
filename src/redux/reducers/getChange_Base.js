import { GET_CHANGE_BASE } from '../actions/types';

const initialState = {
  base: []
};

export default function(state= initialState, actions) {
  switch(actions.type) {
    case GET_CHANGE_BASE: 
      return {
        ...state,
        base: actions.payload
      }

    default:
      return state;
  }
}