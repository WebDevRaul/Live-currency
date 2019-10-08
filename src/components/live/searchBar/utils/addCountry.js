import country  from '../../../common/data/country';

const addToCountry = arr => {
  arr.sort();
  let data = [];

  arr.map((i, index) => {
    const element = country[index];
    data.push({ code: i, ...element });
    return i;
  });

  return { data };
}

export default addToCountry;