import { GET_UPDATE_CURRENCY } from '../actions/types';


const initialState = {
  loading: false,
  updateCurrency: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_UPDATE_CURRENCY:
      return {
        ...state,
        loading: false,
        updateCurrency: action.payload
      }

    default:
      return state;
  }
};