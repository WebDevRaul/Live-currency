export const toFixedOne = ({ rates, to_base }) => {
  if(!!!rates) return null;
  // Filter for to value
  const arr =  Object.entries(rates).filter(i => i[0] === to_base);

  // extract the value
  const value = arr.map(i => i[1]);

  // return 4 decimals (return String because <Span /> require string as prop)
  return String(Number(value[0]).toFixed(4))
};

export const toFixedFuncArr = data => {
  if(!!!data) return null;
  let result = [];
  data.map(i => {
    return result.push([i[0], i[1].toFixed(4)])
  })
  return result
}

export const findKeys = data => {
  const key =  Object.keys(data).map(i => i);
  return key;
}

export const findArr = ({ row, data: { rates, keys } }) => {
  // Select array index
  const arr = Object.values(rates)[row];
  if(!!!arr) return null;
  let response = []
  
  keys.map((el, index) => {
    response.push([el, arr[`${keys[index]}`]])
  });

  return response;

  // const nestedArr = keys.map(el =>  Object.entries(arr).filter(i => i[0].indexOf(el) !== -1))
  // const flattened = [].concat.apply([],nestedArr);
  // return flattened;
}