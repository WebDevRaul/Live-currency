import React, { Component } from 'react';
import axios from 'axios'

//Components
import SelectRate from './SelectRate';
import TableRate from './TableRate';

//Redux
import { connect } from 'react-redux';
import { get_Collect_Data } from '../../redux/actions/get_Collect_Data';
import { get_Basic_Rates } from '../../redux/actions/get_Basic_Rates';

//Common
import isEmpty from '../common/isEmpty';

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
    this.props.get_Basic_Rates()
  }

  render() {
    // const { date } = this.props.date;
    // const { changeBase } = this.props.changeBase;
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

const mapStateToProps = state => ({
  base: state.base,
  date: state.date,
  changeBase: state.changeBase
})

export default connect( mapStateToProps, { get_Collect_Data, get_Basic_Rates })(Live_Currency);
