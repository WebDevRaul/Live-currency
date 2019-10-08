import { SET, RATES, ERROR } from '../actions/types';

const initialState = {
  data: {
    rates: {},
    from_base: '',
    date: '',
    to_base: 'EUR'
  },
  isLoading: false,
  error: {}
};

const rates = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case SET.CURRENCY:
      return {
        ...state,
        data: {
          ...state.data,
          rates: payload.rates,
          from_base: payload.base,
          date: payload.date
        }
      }
    case RATES.LOADING_RATES:
      return {
        ...state,
        isLoading: payload
      }
    case RATES.LOADED_RATES:
      return {
        ...state,
        isLoading: payload
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

export default rates;