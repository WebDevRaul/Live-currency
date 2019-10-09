import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

const Data = ({ data: { flag, country, currency, code  }}) => (
  <div className='data'>
    <div className='row no-gutters'>
      <div className='col-5'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-2'>
                <p><Flag code={flag} width={30} /></p>
            </div>
            <div className='col-12 col-sm-10'>
              <p className='country'>{country}</p>
            </div>
          </div>    
      </div>
      <div className='col-5'><p className='keep-height'>{currency}</p></div>
      <div className='col-2'><p className='keep-height'>{code}</p></div>
    </div>
  </div>
)

Data.propTypes = {
  data: PropTypes.object.isRequired
}

export default Data;