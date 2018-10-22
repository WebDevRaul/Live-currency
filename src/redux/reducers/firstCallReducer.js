import { GET_FIRST_CALL, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  ratesData: {},
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
        loading: false,
        ratesData: action.payload.rates,
        data: action.payload
      }

    default:
      return state;
  }
}
