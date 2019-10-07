import { SET, ERROR } from '../actions/types';

const initialState = {
  convertor: {
    rates: {},
    from: 'GBP',
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
          from: payload.base,
          date: payload.date
        }
      }
    case SET.FROM:
      return {
        ...state,
        convertor: {
          ...state.convertor,
          from: payload
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