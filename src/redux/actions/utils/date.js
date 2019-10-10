const date = new Date();
const hour = date.getHours();
let update = 0;

if(hour < 17 || hour > 24) update = 1;

const getToday = value => {
  const seconds = value.setDate(value.getDate() - update);
  const date = new Date(seconds).toISOString().slice(0,10);
  return date;
};
const getDay = value => {
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

export const TODAY = getToday(date);
export const DAY_BEFORE = getDay(date);
export const TWO_DAYS_BEFORE = getDay(date);
export const TREE_DAYS_BEFORE = getDay(date);
export const LAST_YEAR = getYear(date);