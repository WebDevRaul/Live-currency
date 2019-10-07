// toFixed(4) not working all the way
import isEmpty from '../../../../common/isEmpty/isEmpty';

export const toFixed4Decimals = ({ value, multiply }) => {
  let result = '0';
  let _number, _decimal;

  // Check if Empty
  if(isEmpty(multiply)) return result;

  // Multiply
  const total = String(value * multiply);

  // Check if any decimals
  if(!total.includes('.')) return result = total;

  // Split the result
  const _result = total.split('.');
  _number = _result[0];
  _decimal = _result[1]

  // return the result
  result = _number + '.' + Number(String(_decimal).substr(0, 4));

  return result;
}