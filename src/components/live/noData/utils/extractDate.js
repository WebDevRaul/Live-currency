import { UPDATE ,TODAY, DAY_BEFORE, TWO_DAYS_BEFORE, DAY } from '../../../../redux/actions/utils/date';
import isEmpty from '../../../common/isEmpty/isEmpty';

const extractDate = date => {

  let arrDate = [];
  if(isEmpty(date)) return [];

  if(DAY === 'Monday') {
    if(!UPDATE) return arrDate = [...arrDate, TODAY, DAY_BEFORE, TWO_DAYS_BEFORE ];
  }
  if(DAY === 'Sunday') return arrDate = [...arrDate, TODAY, DAY_BEFORE];
  if(DAY === 'Saturday') return arrDate = [...arrDate, TODAY];
  if((DAY !== 'Monday' || 'Sunday' || 'Saturday') && !UPDATE) return arrDate = [TODAY];

  return arrDate;
};

export default extractDate;