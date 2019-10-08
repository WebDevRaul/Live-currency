import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledInput from './Styled_Input';


const CustomInput = ({ name, value, onChange, type, error }) => (
  <StyledInput>
    <div className='group'>
      <input 
        className={classnames('form-input', {'validate' : error})}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        autoComplete='true'
        required
      />
    </div>
  </StyledInput>
);

CustomInput.defaultProps = {
  type: 'text'
}

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default CustomInput;