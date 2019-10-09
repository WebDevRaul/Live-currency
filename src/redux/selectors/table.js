import { createSelector } from 'reselect';

const select_rates_state = state => state.rates.data;

export const select_today = createSelector(
  [select_rates_state],
  data => data.date
);