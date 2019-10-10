import { RATES } from '../actions/types';

const initialState = {
  data: {
    rates: {},
    from_base: 'GBP',
    date: '',
    keys: ['RON', 'PHP'],
    lastYear: {}
  },
  isLoading: false,
  error: {}
};

const rates = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case RATES.UPDATE:
      return {
        ...state,
        data: {
          ...state.data,
          rates: payload.rates,
          from_base: payload.base,
          date: payload.end_at
        }
      }
    case RATES.UPDATE_LAST_YEAR:
      return {
        ...state,
        data: {
          ...state.data,
          lastYear: payload.rates
        }
      }
    case RATES.FROM_RATES:
      return {
        ...state,
        data: {
          ...state.data,
          from_base: payload
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
    case RATES.ERROR:
        return {
          ...state,
          error: payload
        }
    default:
      return state;
  }
};

export default rates;