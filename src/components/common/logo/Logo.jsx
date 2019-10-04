import React from 'react';

import StyledLogo from './Styled_Logo';

const Logo = () => {
  return (
    <StyledLogo>
      <div className='logo'>
        <div className='inner-logo'>
          <p>Live</p>
          <span>Currency</span>
        </div>
      </div>
    </StyledLogo>
  )
}

export default Logo;