import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledInput from './Styled_Input';


const Input = ({ name, value, onChange, onFocus, type, error }) => (
  <StyledInput>
    <div className='group'>
      <input 
        className={classnames('form-input', {'validate' : error})}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        autoComplete='true'
        required
      />
    </div>
  </StyledInput>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string
}

export default Input;