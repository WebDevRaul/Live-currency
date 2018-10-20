import React, { Component } from 'react'
import SearchCurrency from './SearchCurrency';
import Currency from './Currency';

class LiveCurrency extends Component {
  render() {
    return (
      <div className='liveCurrency'>
        <SearchCurrency />
        <Currency />
      </div>
    )
  }
}

export default LiveCurrency;
