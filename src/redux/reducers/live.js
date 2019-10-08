import { SET, ERROR, LOADING } from '../actions/types';

const initialState = {
  convertor: {
    rates: {},
    from_base: '',
    date: '',
    to_base: 'EUR'
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
          from_base: payload.base,
          date: payload.date
        }
      }
    case SET.FROM_BASE:
      return {
        ...state,
        convertor: {
          ...state.convertor,
          from_base: payload
        }
      }
    case SET.TO_BASE:
      return {
        ...state,
        convertor: {
          ...state.convertor,
          to_base: payload
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