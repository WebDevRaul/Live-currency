import { createSelector } from 'reselect';
import { findArr } from '../utils/live';

const select_rates_state = state => state.rates.data;

export const select_date_today = createSelector(
  [select_rates_state],
  data => data.end_at
);

export const select_values_today = createSelector(
  [select_rates_state],
  data => findArr({ data, row: 0 })
);

export const select_date_dayBefore = createSelector(
  [select_rates_state],
  data => data.start_at
);

export const select_values_dayBefore = createSelector(
  [select_rates_state],
  data => findArr({ data, row: 1 })
);