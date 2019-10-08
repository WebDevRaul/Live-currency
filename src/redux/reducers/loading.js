import { LOADING } from '../actions/types';

const initialState = {
  isLoading: false,
};

const loading = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case LOADING.IS_LOADING:
      return {
        ...state,
        isLoading: payload
      }
    case LOADING.IS_LOADED:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state;
  }
};

export default loading;