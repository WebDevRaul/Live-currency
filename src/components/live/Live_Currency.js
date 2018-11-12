import React, { Component } from 'react';

//Components
import SelectRate from './Select_Rate';
import TableRate from './Table_Rate';
import SearchBar from './Search_Bar';

//Redux
import { connect } from 'react-redux';
import { get_Collect_Data } from '../../redux/actions/get_Collect_Data';
import { get_Rates } from '../../redux/actions/get_Rates';
import { get_New_Rate } from '../../redux/actions/get_New_Rate';

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
      const { base } = nextProps.base;
      const { symbols } = this.props.symbols;
      const { date } = this.props;
      this.props.get_Rates(base, date, symbols);
    }

    if (nextProps.newSymbols.newSymbols !== this.props.newSymbols.newSymbols ) {
      const { base } = this.props.base;
      const { date } = this.props;
      const { newSymbols } = nextProps.newSymbols;
      this.props.get_New_Rate(base, date, newSymbols)
    } 

    if (nextProps.base.base !== this.props.base.base) {
      const { base } = nextProps.base;
      const { date } = this.props;
      const { newSymbols } = this.props.newSymbols;
      this.props.get_New_Rate(base, date, newSymbols)
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
  base: state.base,
  symbols: state.symbols,
  date: state.date,
  newSymbols: state.newSymbols
})

export default connect( mapStateToProps , { get_Collect_Data, get_Rates, get_New_Rate } )(Live_Currency);
