import { SET, ERROR } from '../actions/types';

const initialState = {
  convertor: {
    rates: {},
    base: '',
    date: '',
    to: 'EUR'

  },
  error: {}
};

const live = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case SET.CURRENCY:
      return {
        ...state,
        convertor: {
          ...state.convertor,
          rates: payload.rates,
          base: payload.base,
          date: payload.date
        }
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