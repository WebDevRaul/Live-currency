import React from 'react';
import PropTypes from 'prop-types';

import StyledSelect from './Styled_Select';

const CustomSelect = ({ name, onChange, arr, value }) => {
  const option = arr.map(i => <option key={i} value={i}>{i}</option>);
  return (
    <StyledSelect>
      <select
        className='custom-select'
        name={name}
        onChange={onChange}
      >
        <option>{value}</option>
        {option}
      </select>
    </StyledSelect>
  )
}


CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CustomSelect;