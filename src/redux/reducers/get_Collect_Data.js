import { GET_COLLECT_DATA, GET_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  collectData: ''
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_LOADING: 
    return {
      ...state,
      loading: true
    }
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