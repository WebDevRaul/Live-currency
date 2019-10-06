import { GET_SET_FROM } from '../actions/types';

const initialState = {
  loading: false,
  from: 'GBP'
};

export default function(state=initialState, action ) {
  switch(action.type) {
    case GET_SET_FROM:
      return {
        ...state,
        loading: false,
        from: action.payload
      }

    default:
      return state;
  }
}

