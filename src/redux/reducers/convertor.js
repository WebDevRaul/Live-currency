import { SET, CONVERTOR, ERROR } from '../actions/types';

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

const convertor = (state=initialState, action) => {
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
    case CONVERTOR.UPDATE:
      return {
        ...state,
        data: {
          ...state.data,
          rates: payload.rates,
          from_base: payload.base,
          date: payload.date
        }
      }
    case CONVERTOR.FROM_BASE:
      return {
        ...state,
        data: {
          ...state.data,
          from_base: payload
        }
      }
    case CONVERTOR.TO_BASE:
      return {
        ...state,
        data: {
          ...state.data,
          to_base: payload
        }
      }
    case CONVERTOR.IS_LOADING_CONVERTOR:
      return {
        ...state,
        isLoading: payload
      }
    case CONVERTOR.IS_LOADED_CONVERTOR:
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

export default convertor;