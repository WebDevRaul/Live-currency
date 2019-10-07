import { createSelector } from 'reselect';
import { findTo, findKeys } from '../utils/live';

const select_convertor_state = state => state.live.convertor;

export const select_rates = createSelector(
  [select_convertor_state],
  convertor => convertor.rates
);

export const select_date = createSelector(
  [select_convertor_state],
  convertor => convertor.date
);

export const select_from = createSelector(
  [select_convertor_state],
  convertor => convertor.from
);

export const select_to = createSelector(
  [select_convertor_state],
  convertor => convertor.to
);

export const select_value = createSelector(
  [select_convertor_state],
  convertor => findTo(convertor)
);

export const select_keys = createSelector(
  [select_convertor_state],
  convertor => findKeys(convertor.rates)
);