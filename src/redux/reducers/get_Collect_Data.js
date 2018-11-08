import { GET_COLLECT_DATA } from '../actions/types';

const initialState = {
  loading: false,
  collectData: ''
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_COLLECT_DATA:
      return {
        ...state,
        loading: false,
        collectData: 'collected'
      }
    default:
      return state
  }
}