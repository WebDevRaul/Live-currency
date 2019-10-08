export const findTo = ({ rates, to_base }) => {
  // Filter for to value
  const arr =  Object.entries(rates).filter(i => i[0] === to_base);

  // extract the value
  const value = arr.map(i => {
    if(i !== undefined) return i[1];
    return i;
  });

  // return 4 decimals (return String because <Span /> require string as prop)
  return String(Number(value[0]).toFixed(4))
};

export const findKeys = data => {
  const key =  Object.keys(data).map(i => i);
  return key;
}