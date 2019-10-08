import { LIVE } from '../actions/types';

const initialState = {
  isLoading: false,
  error: {}
};

const live = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case LIVE.IS_LOADING:
      return {
        ...state,
        isLoading: payload
      }
    case LIVE.IS_LOADED:
      return {
        ...state,
        isLoading: payload
      }
    case LIVE.SET_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
};

export default live;