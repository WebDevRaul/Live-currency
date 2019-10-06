export const findTo = ({ rates, to }) => {
  return Object.entries(rates).filter(i => i[0] === to)
}