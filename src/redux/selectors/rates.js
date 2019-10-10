import { createSelector } from 'reselect';
import { findKeys, findArr, toFixedFuncArr } from '../utils/live';

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
  data => toFixedFuncArr(findArr({ data, row: 1 }))
);

export const select_date_lastYear = createSelector(
  [select_rates_state],
  data => data.year_at
);

export const select_values_lastYear = createSelector(
  [select_rates_state],
  data => findArr({ data: { keys: data.keys, rates: Object.values(data.lastYear) }, row: 0 })
);