import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/common/button/CustomButton';

import StyledLanding from './Styled_Landing';

class Landing extends Component {

  onClick = () => {
    this.props.history.push('/live');
  }

  render() {
    return (
      <StyledLanding>
        <div className='landing'>
          <div className='background'></div>
          <div className='info' >
            {

            }
          </div>
          <div className='continue'>
            <CustomButton value='continue' isClass='' onClick={this.onClick} isLoading={false}/>
          </div>
        </div>
      </StyledLanding>
    )
  }
}

Landing.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Landing);