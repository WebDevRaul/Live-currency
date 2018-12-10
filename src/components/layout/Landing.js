import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

//Css
import '../css/Landing.css'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='landing'>
        <div>
          <p>Text here</p>
        </div>
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
