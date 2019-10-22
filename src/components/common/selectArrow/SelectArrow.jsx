import React from 'react';
import PropTypes from 'prop-types';
import StyledSelectArrow from './Styled_SelectArrow';

const SelectArrow = ({ rotate }) => {
  return (
    <StyledSelectArrow rotate={rotate ? 'rotate' : undefined}>
      <div className='arrow'>
        <span className='left-up'></span>
        <span className='right-up'></span>
      </div>
    </StyledSelectArrow>
  )
}

SelectArrow.propTypes = {
  rotate: PropTypes.bool.isRequired
}

export default SelectArrow;