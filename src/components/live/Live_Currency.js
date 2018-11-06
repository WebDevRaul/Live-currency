import React, { Component } from 'react';

//Components
import Select_Rate from './Select_Rate';

//Redux
import { connect } from 'react-redux';

//Css
import '../css/LiveCurrency.css'
import Table_Rate from './Table_Rate';

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
          <Select_Rate />
        </div>
        <div className='col'>
          searchBar
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Table_Rate />
        </div>
      </div>
    </div>
    )
  }
}

export default connect(null)(Live_Currency);
