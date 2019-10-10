import { createSelector } from 'reselect';
import { findKeys } from '../utils/live';

const select_rates_state = state => state.rates.data;
const select_state = state => state.rates;

export const select_R_from_base = createSelector(
  [select_rates_state],
  data => data.from_base
);

export const select_keys = createSelector(
  [select_rates_state],
  data => findKeys(data.rates)
);

export const select_isLoading = createSelector(
  [select_state],
  rates => rates.isLoading
);