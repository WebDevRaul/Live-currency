import { SET, ERROR, LOADING } from '../actions/types';

const initialState = {
  convertor: {
    rates: {},
    from: '',
    date: '',
    to: 'EUR'
  },
  isLoading: false,
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
    case SET.TO:
      return {
        ...state,
        convertor: {
          ...state.convertor,
          to: payload
        }
      }
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