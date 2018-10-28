import React, { Component } from 'react';

//Css
import '../css/Currency.css';

export default class Currency extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col'>
          <div className='currency'>
            <p className='currencyName'>{this.props.name} : <span>{this.props.data}</span></p>
          </div>
        </div>
      </div>
    )
  }
}
