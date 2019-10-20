import { TODAY, DAY_BEFORE, TWO_DAYS_BEFORE } from '../../../../redux/actions/utils/date';
import isEmpty from '../../../common/isEmpty/isEmpty';

const extractDate = date => {
  let arrDate = [];
  if(isEmpty(date)) return [];

  const day = new Date().toISOString().slice(0,10);
  const actualDate = new Date().getTime();
  const incDate = new Date(date).getTime();
  const today = new Date(TODAY).getTime();
  const dayBefore = new Date(DAY_BEFORE).getTime();
  const twoDaysBefore = new Date(TWO_DAYS_BEFORE).getTime();

  if(actualDate > today) arrDate = [...arrDate, day];
  if(today > incDate) arrDate = [...arrDate, TODAY];
  if(dayBefore > incDate) arrDate = [...arrDate, DAY_BEFORE];
  if(twoDaysBefore > incDate) arrDate = [...arrDate, TWO_DAYS_BEFORE];


  
  return arrDate;
};

export default extractDate;