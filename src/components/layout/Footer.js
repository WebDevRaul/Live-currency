import React, { Component } from 'react';

//Components
import Logo from './Logo';

//Css
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <hr />
        <div className='row footerDiv'>
          <div className='col-sm-12 footerLogo'>
            <span >Copyright &copy; {new Date().getFullYear()} <Logo /></span>
          </div>
          <div className='col-sm-12'>
            <div className='footer-links'>
              <p>FIND US ON</p>
              <span>
                <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
                  <i className='fab fa-facebook-f'></i>
                </a>
              </span>
              <span>
                <a href='https://twitter.com/' target='_blank' rel="noopener noreferrer">
                  <i className='fab fa-twitter'></i>
                </a>
              </span>
              <span>
                <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer">
                  <i className='fab fa-instagram'></i>
                </a>
              </span>
              <span>
                <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer">
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Footer;
