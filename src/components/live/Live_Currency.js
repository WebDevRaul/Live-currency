import React, { Component } from 'react';

//Components
import SelectRate from './Select_Rate';
import TableRate from './Table_Rate';
import SearchBar from './Search_Bar';

//Redux
import { connect } from 'react-redux';
import { get_Collect_Data } from '../../redux/actions/get_Collect_Data';

//Css
import '../css/LiveCurrency.css'

class Live_Currency extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {},
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
          <SearchBar />
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
  errors: state.errors,
})

export default connect( mapStateToProps , { get_Collect_Data } )(Live_Currency);
