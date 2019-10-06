import React from 'react';

import CustomButton from '../../components/common/button/CustomButton';

import StyledLanding from './Styled_Landing';

const Landing = () => {

  const onClick = () => {

  }
  return (
    <StyledLanding>
      <div className='landing'>
          <CustomButton value='continue' isClass='inverted' onClick={onClick} isLoading={false}/>
        <div className='background'></div>
        <div className='continue'>
        </div>
      </div>
    </StyledLanding>
  )
}

export default Landing;