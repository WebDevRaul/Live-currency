import { GET_SET_TO } from '../actions/types';

const initialState = {
  loading: false,
  to: 'EUR'
};

export default function(state=initialState, action ) {
  switch(action.type) {
    case GET_SET_TO:
      return {
        ...state,
        loading: false,
        to: action.payload
      }

    default:
      return state;
  }
}

