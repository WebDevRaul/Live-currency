import React from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './Styled_Select';

const CustomSelect = ({ onChange, arr, value }) => {
  const option = !!!arr 
    ? <option />
    : arr.map(i => <option key={i} value={i}>{i}</option>)
  return (
    <StyledSelect>
      <select
        className='custom-select'
        onChange={onChange}
      >
        <option>{value}</option>
        {option}
      </select>
    </StyledSelect>
  )
}


CustomSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  arr: PropTypes.array,
  value: PropTypes.string.isRequired
}

export default CustomSelect;