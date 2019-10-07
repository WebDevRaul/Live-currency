import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledInput from './Styled_Input';


const CustomInput = ({ name, value, onChange, onFocus, type, error, placeholder }) => (
  <StyledInput>
    <div className='group'>
      <input 
        className={classnames('form-input', {'validate' : error})}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        placeholder={placeholder}
        autoComplete='true'
        required
      />
    </div>
  </StyledInput>
);

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.number.isRequired,
  error: PropTypes.string
}

export default CustomInput;