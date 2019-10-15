import React from 'react';
import PropTypes from 'prop-types';

const Rate = ({ name, value }) => (
  <div className='rate'>
    <p>{name} :</p>
    <p>{value}</p>
  </div>
)

Rate.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Rate;