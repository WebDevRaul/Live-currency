import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

const Data = ({ data: { flag, country, currency, code  }}) => (
  <div className='data'>
    <div className='row no-gutters'>
      <div className='col-5'>
          <div className='row no-gutters'>
            <div className='col-12 col-sm-2'>
                <div className='flag'>
                  <span><Flag code={flag} width={30} /></span>
                </div>
            </div>
            <div className='col-12 col-sm-10'>
              <div className='country'>
                <span>{country}</span>
              </div>
            </div>
          </div>    
      </div>
      <div className='col-5'><div className='currency'><span>{currency}</span></div></div>
      <div className='col-2'><div className='code'><span>{code}</span></div></div>
    </div>
  </div>
)

Data.propTypes = {
  data: PropTypes.object.isRequired
}

export default Data;