import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/common/button/CustomButton';
import InfoText from './InfoText';

import StyledLanding from './Styled_Landing';

const Landing = ({ history }) => {

  const onClick = () => {
    history.push('/live');
  };

  return (
    <StyledLanding>
      <div className='landing'>
        <div className='background'></div>
        <InfoText />
        <div className='continue'>
          <CustomButton value='continue' isClass='' onClick={onClick} isLoading={false}/>
        </div>
      </div>
    </StyledLanding>
  )
}

Landing.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Landing);