import { CONVERTOR } from '../actions/types';

const initialState = {
  data: {
    rates: {},
    from_base: 'GBP',
    date: '',
    to_base: 'EUR'
  },
  isLoading: false,
  error: {}
};

const convertor = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
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
    case CONVERTOR.LOADING_CONVERTOR:
      return {
        ...state,
        isLoading: payload
      }
    case CONVERTOR.LOADED_CONVERTOR:
      return {
        ...state,
        isLoading: payload
      }
    case CONVERTOR.ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
};

export default convertor;