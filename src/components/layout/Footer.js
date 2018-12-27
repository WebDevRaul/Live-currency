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
        <div className='footer-Div'>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 footer-Logo'>
              <div className='row'>
                <div className='col'>
                  <div className='footer-Logo-Div'>
                    <span className='mr-2'>Copyright &copy; {new Date().getFullYear()}</span><span><Logo /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-5 col-md-4 offset-md-1 footer-Info'>
              <div className='row'>
                <div className='col'>
                  <p>FIND US ON</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='footer-Links'>
                    <span>
                      <a href='https://www.facebook.com/raul.savin.3' target='_blank' rel="noopener noreferrer">
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
            </div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Footer;

//To fix later Anchor margin / padding on click