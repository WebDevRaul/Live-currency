import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div>
        <Link to='/live-currency'>Live Currency</Link>
        <Link to='/live_currency'>Live_Currency</Link>
      </div>
    )
  }
}

export default Landing;
