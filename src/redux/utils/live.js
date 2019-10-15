import isEmpty from '../../components/common/isEmpty/isEmpty';

export const toFixedOne = ({ rates, to_base }) => {
  // Filter for to value
  const arr =  Object.entries(rates).filter(i => i[0] === to_base);

  // extract the value
  const value = arr.map(i => i[1]);
  const data = String(value[0]);
  if(!data.includes('.')) return data;

  // Split the data
  const result = data.split('.');
  const number = result[0];
  const decimals = result[1];

  return number+'.'+decimals.substr(0,4)
};

export const toFixedFuncArr = ({ rates, keys, row }) => {
  if(isEmpty(rates)) return null;
  // Select array index
  const arr = Object.values(rates)[row];
  // Check row[1]
  if(!!!arr) return null;
  let response = []
  
  keys.map((el, index) => {
    return response.push([el, arr[`${keys[index]}`]])
  });
  // const nestedArr = keys.map(el =>  Object.entries(arr).filter(i => i[0].indexOf(el) !== -1))
  // const flattened = [].concat.apply([],nestedArr);
  // return flattened;

  const toFixedFunc = response.map(i => {
    const key = i[0];
    const value = String(i[1]);
    if(!value.includes('.')) return [key, value];
    const data = value.split('.');
    const number = data[0];
    const decimals = data[1];
    const result = number+'.'+decimals.substr(0,4);
    return [key, result]
  });
  
  return toFixedFunc;
}

export const findKeys = data => {
  const key =  Object.keys(data).map(i => i);
  return key;
}