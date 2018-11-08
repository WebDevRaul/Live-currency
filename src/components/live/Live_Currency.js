import React, { Component } from 'react';
import axios from 'axios'

//Components
import SelectRate from './SelectRate';
import TableRate from './TableRate';

//Redux
import { connect } from 'react-redux';
import { get_Collect_Data } from '../../redux/actions/get_Collect_Data';

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
    this.props.get_Collect_Data();
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

export default connect(null, { get_Collect_Data })(Live_Currency);
