import React, { Component } from 'react';

//Components
import SelectRate from './SelectRate';
import TableRate from './TableRate';

//Redux
import { connect } from 'react-redux';

//Css
import '../css/LiveCurrency.css'

class Live_Currency extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {}
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='liveCurrency'>
      <div className='row'>
        <div className='col'>
          <SelectRate />
        </div>
        <div className='col'>
          searchBar
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <TableRate />
        </div>
      </div>
    </div>
    )
  }
}

export default connect(null)(Live_Currency);
