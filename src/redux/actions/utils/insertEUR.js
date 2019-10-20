const insertEUR = ({ data, BASE }) => {
  const dataPlusEuro = Object.values(data.rates).map(i => {return {...i, EUR: 1}})
  const success = BASE === 'EUR' ? {...data, rates: dataPlusEuro} : data;

  return {success};
}

export default insertEUR;