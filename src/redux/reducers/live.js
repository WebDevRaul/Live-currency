import { SET, ERROR } from '../actions/types';

const initialState = {
  currency: {},
  error: {}
};

const live = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case SET.CURRENCY:
      return {
        ...state,
        currency: payload
      }
    case ERROR.SET_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
};

export default live;