const TIME = new Date();
const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const HOUR = TIME.getHours() - 2;
export const MINUTES = TIME.getMinutes();
export const DAY = DAYS[ TIME.getDay() ];

export let UPDATE = 1;

if((HOUR === 16 && MINUTES > 30) || (HOUR >= 17 && HOUR < 24)) UPDATE = 0;

const GET_TODAY = value => {
  const SECONDS = value.setDate(value.getDate() - UPDATE);
  const TIME = new Date(SECONDS).toISOString().slice(0,10);
  return TIME;
}

const GET_DAY = value => {
  const SECONDS = value.setDate(value.getDate() - 1);
  const TIME = new Date(SECONDS).toISOString().slice(0,10);
  return TIME;
};

const GET_YEAR = value => {;
  const YEAR = value.getFullYear() - 1;
  value.setFullYear(YEAR);
  const LAST_YEAR = value.toISOString().slice(0,10);
  return LAST_YEAR;
}

export const DATE = new Date().toISOString().slice(0,10);
export const TODAY = GET_TODAY(TIME);
export const DAY_BEFORE = GET_DAY(TIME);
export const TWO_DAYS_BEFORE = GET_DAY(TIME);
export const TREE_DAYS_BEFORE = GET_DAY(TIME);
export const LAST_YEAR = GET_YEAR(new Date(TODAY));