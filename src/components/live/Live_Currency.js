import React, { Component } from 'react';

//Components
import SelectRate from './Select_Rate';
import TableRate from './Table_Rate';

//Redux
import { connect } from 'react-redux';
import { get_Collect_Data } from '../../redux/actions/get_Collect_Data';
import { get_Rates } from '../../redux/actions/get_Rates';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.base.base !== this.props.base.base) {
      this.props.get_Rates(nextProps.base.base, this.props.symbols.today, this.props.date.date);
    }
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

const mapStateToProps = state => ({
  errors: state.errors,
  base: state.base,
  symbols: state.symbols,
  date: state.date,
})

export default connect( mapStateToProps , { get_Collect_Data, get_Rates } )(Live_Currency);
