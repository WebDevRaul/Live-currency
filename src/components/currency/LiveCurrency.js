import React, { Component } from 'react'
import SearchCurrency from './SearchCurrency';
import Currency from './Currency';

class LiveCurrency extends Component {
  render() {
    const test = ['test1', 'test2', 'test3'];

    const res = test.map((rez) => <Currency key={rez} test={rez}/>)

    return (
      <div className='liveCurrency'>
        <SearchCurrency />
        {res}
      </div>
    )
  }
}

export default LiveCurrency;
