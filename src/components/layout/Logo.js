import React, { Component } from 'react';

//Css
import '../css/Logo.css';

export default class Logo extends Component {
  render() {
    return (
      <span className='logo'>
        <div>
          <span>Live </span>
        </div>
        <span>Currency</span>
      </span>
    )
  }
}
