import { createSelector } from 'reselect';
import { findTo, findKeys } from '../utils/live';

const select_convertor_state = state => state.convertor.data;
const select_state = state => state.convertor;

export const select_rates = createSelector(
  [select_convertor_state],
  data => data.rates
);

export const select_date = createSelector(
  [select_convertor_state],
  data => data.date
);

export const select_from_base = createSelector(
  [select_convertor_state],
  data => data.from_base
);

export const select_to_base = createSelector(
  [select_convertor_state],
  data => data.to_base
);

export const select_value = createSelector(
  [select_convertor_state],
  data => findTo(data)
);

export const select_keys = createSelector(
  [select_convertor_state],
  data => findKeys(data.rates)
);

export const select_isLoading = createSelector(
  [select_state],
  live => live.isLoading
);