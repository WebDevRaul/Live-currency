import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/common/button/CustomButton';

import StyledLanding from './Styled_Landing';

const Landing = ({ history }) => {

  const onClick = () => {
    history.push('/live')
  }
  return (
    <StyledLanding>
      <div className='landing'>
        <div className='background'></div>
        <div className='continue'>
          <CustomButton value='continue' isClass='' onClick={onClick} isLoading={false}/>
        </div>
      </div>
    </StyledLanding>
  )
}

export default withRouter(Landing);