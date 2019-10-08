import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

const Data = ({ data: { flag, country, currency, code  }}) => (
  <div className='data'>
    <span><Flag code={flag} width={30} /></span>
    <span>{country}</span>
    <span>{currency}</span>
    <span>{code}</span>
  </div>
)

Data.propTypes = {
  data: PropTypes.object.isRequired
}

export default Data;