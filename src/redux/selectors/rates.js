import { createSelector } from 'reselect';
import { toFixedFuncArr } from '../utils/live';

const select_state = state => state.rates;
const select_rates_state = state => state.rates.data;
const select_rates_state_two = state => state.rates.data_two;

export const select_R_from_base = createSelector(
  [select_rates_state],
  data => data.from_base
);

export const select_keys = createSelector(
  [select_state],
  data => data.keys
);

// TODAY
export const select_date_today = createSelector(
  [select_rates_state],
  data => data.end_at
);

export const select_isLoading = createSelector(
  [select_rates_state],
  data => data.isLoading
);

export const select_values_today = createSelector( 
  [select_state],
  data => toFixedFuncArr({ rates: data.data.rates, keys: data.keys, row: 0 })
);

// DAY BEFORE
export const select_date_dayBefore = createSelector(
  [select_rates_state],
  data => data.start_at
);

export const select_values_dayBefore = createSelector(
  [select_state],
  data => toFixedFuncArr({ rates: data.data.rates, keys: data.keys, row: 1 })
);


// Last Year

export const select_date_lastYear = createSelector(
  [select_rates_state_two],
  data_two => data_two.year_at
);

export const select_isLoading_lastYear = createSelector(
  [select_rates_state_two],
  data_two => data_two.isLoading
  );

export const select_values_lastYear = createSelector(
  [select_state],
  data => toFixedFuncArr({ rates: data.data_two.rates, keys: data.keys, row: 0 })
);