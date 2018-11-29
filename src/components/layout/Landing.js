import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Css
import '../css/Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <Link to='/live_currency'>Live_Currency</Link>
      </div>
    )
  }
}

export default Landing;
