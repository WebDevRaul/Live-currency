const date = new Date();

const getOneDayBefore = value => {
  const seconds = value.setDate(value.getDate() - 1);
  const date = new Date(seconds).toISOString().slice(0,10);
  return date;
};

const getTwoDaysBefore = value => {
  const seconds = value.setDate(value.getDate() - 1);
  const date = new Date(seconds).toISOString().slice(0,10);
  return date;
};

const getTreeDaysBefore = value => {
  const seconds = value.setDate(value.getDate() - 1);
  const date = new Date(seconds).toISOString().slice(0,10);
  return date;
};

const getYear = value => {;
  const year = value.getFullYear() - 1;
  value.setFullYear(year);
  const last_year = value.toISOString().slice(0,10);
  return last_year;
}

export const TODAY = date.toISOString().slice(0,10);
export const DAY_BEFORE = getOneDayBefore(date);
export const TWO_DAYS_BEFORE = getTwoDaysBefore(date);
export const TREE_DAYS_BEFORE = getTreeDaysBefore(date);
export const LAST_YEAR = getYear(date);