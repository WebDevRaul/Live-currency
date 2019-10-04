import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import StyledButton from './Styled_CustomButton';

const CustomButton = ({ value, isClass, onClick, isLoading, type }) => {
  return (
    <StyledButton>
      <button className={`custom-button ${isClass}`} type={type} onClick={onClick}>
        {isLoading ? <Spinner /> : value}
      </button>
    </StyledButton>
  )
}

CustomButton.defaultProps = {
  type: 'button'
}

CustomButton.propTypes = {
  value: PropTypes.string.isRequired,
  isClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
}

export default CustomButton;