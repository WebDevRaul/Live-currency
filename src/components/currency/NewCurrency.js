import React, { Component } from 'react';

//Css
import '../css/NewCurrency.css'

class NewCurrency extends Component {
  render() {
    return (
      <div className='newCurrency'>
        <p>{this.props.name} : {this.props.data}</p>
      </div>
    )
  }
}

export default NewCurrency;
