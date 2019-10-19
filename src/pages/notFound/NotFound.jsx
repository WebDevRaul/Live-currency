import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../components/common/button/CustomButton';

import StyledNotFound from './Styled_NotFound';

const NotFound = ({ history }) => {

  const onClick = () => {
    history.push('/live')
  }

  return (
    <StyledNotFound>
      <div className='not-found'>
        <div className='wrapper m-auto'>
          <h1 className=''>Oops!</h1> 
          <h4 className='text-center'>404 - Page not found</h4>
          <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
          <div className='link'>
            <CustomButton value='Go to Homepage' onClick={onClick} isLoading={false} isClass='inverted' />
          </div>
        </div>
      </div>
    </StyledNotFound>
  )
}

export default withRouter(NotFound);