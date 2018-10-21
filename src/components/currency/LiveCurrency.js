import React, { Component } from 'react'
import SearchCurrency from './SearchCurrency';
import Currency from './Currency';

//Redux
import { connect } from 'react-redux';
import { firstCall } from '../../redux/actions/firstCallAction';

class LiveCurrency extends Component {
  constructor() {
    super();
    this.state = {
      currency: {}
    }
  }

  componentDidMount() {
      this.props.firstCall();
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



export default connect(null, { firstCall })(LiveCurrency);