import { createSelector } from 'reselect';
import { findArr } from '../utils/live';

const select_rates_state = state => state.rates.data;

export const select_date = createSelector(
  [select_rates_state],
  data => data.date
);

export const select_values_today = createSelector(
  [select_rates_state],
  data => findArr({ data, row: 0 })
);