import React from 'react';

import Logo from '../../components/common/logo/Logo';
import Links from './Links';

import StyledFooter from './Styled_Footer';

const Footer = () => (
  <StyledFooter>
    <hr />
    <div className='footer'>
      <div className='row no-gutters'>
        <div className='col-12 col-md-6'>
          <div className='info'>
            <div className='date'>Copyright &copy; {new Date().getFullYear()}</div>
            <div className='logo'><Logo /></div>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className='social'>
            <div className='row no-gutters'>
              <div className='col-12'><p>FIND US ON</p></div>
              <div className='col-12'><Links /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </StyledFooter>
)

export default Footer;