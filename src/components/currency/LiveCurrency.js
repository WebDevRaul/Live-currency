import React, { Component } from 'react'
import SearchCurrency from './SearchCurrency';
import Currency from './Currency';
import axios from 'axios';

class LiveCurrency extends Component {
  constructor() {
    super();
    this.state = {
      currency: {}
    }
  }

  componentDidMount() {
    axios
      .get('http://data.fixer.io/api/latest?access_key=b0ab4945712b358052a8fc54d02e7b3d&base=EUR&symbols=USD,CAD')
      .then(res => {
        const response = res.data;
        this.setState({ currency: response })
      })
  }
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
