import React from 'react';
import PropTypes from 'prop-types';

const Rate = ({ name, value }) => (
  <div className='rate'>
    <p>{name} :</p>
    <span>{value}</span>
  </div>
)

Rate.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default Rate;