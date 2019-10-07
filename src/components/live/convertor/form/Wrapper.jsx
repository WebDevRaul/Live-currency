import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <div className='row no-gutters'>
    <div className='col'>
      <div className='children'>
        {children}
      </div>
    </div>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.object.isRequired
}

export default Wrapper;