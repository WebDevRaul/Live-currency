import { createSelector } from 'reselect';
import { findTo } from '../utils/live';

const select_convertor_state = state => state.live.convertor;

export const select_rates = createSelector(
  [select_convertor_state],
  convertor => convertor.rates
);

export const select_date = createSelector(
  [select_convertor_state],
  convertor => convertor.date
);

export const select_base = createSelector(
  [select_convertor_state],
  convertor => convertor.base
);

export const select_to = createSelector(
  [select_convertor_state],
  convertor => convertor.to
);

export const select_value = createSelector(
  [select_convertor_state],
  convertor => findTo(convertor)
);