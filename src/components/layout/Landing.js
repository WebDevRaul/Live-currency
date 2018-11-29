import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Css
import '../css/Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <Link className='landingLink' to='/live_currency'>
          <div className='divArrow'>
            <span className='arrow'></span>
          </div>
        </Link>
      </div>
    )
  }
}

export default Landing;
