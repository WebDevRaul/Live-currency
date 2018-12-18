import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import SelectRate from './Select_Rate';
import TableRate from './Table_Rate';
import SearchBar from './Search_Bar';
import CurrencyConvertor from './Currency_Convertor';

//Redux
import { connect } from 'react-redux';
import { get_Collect_Data } from '../../redux/actions/get_Collect_Data';

//Css
import '../css/LiveCurrency.css'

class Live_Currency extends Component {
  constructor(props) {
    super(props);
    this.state={}
  };

  static getDerivedStateFromProps(nextProps, prevState){
    const loadingSelectRate = nextProps.selectRate.loading;
    const loadingDate = nextProps.date.loading;
    const loadingBase = nextProps.base.loading;
    const loadingSymbols = nextProps.symbols.loading;

    if( loadingSelectRate !== prevState.loadingSelectRate || loadingDate !== prevState.loadingDate || loadingBase !== prevState.loadingBase || loadingSymbols !==prevState.loadingSymbols) {
      return { loadingSelectRate, loadingDate, loadingBase, loadingSymbols };
   }
   else return null;
 }
  
  componentDidMount(prevProps, prevState) {
    this.props.get_Collect_Data();
  }
  
  render() {

    //Loading white page(instead of spinner)
    let content;
    const { loadingSelectRate, loadingDate, loadingBase, loadingSymbols } = this.state;
    if (loadingSelectRate === true || loadingDate === true || loadingBase === true || loadingSymbols === true) {
      content = <div className='liveCurrencyEmpty'></div>
    } else {
      content = 
        <div className='liveCurrency'>
          <div className='liveCurrencyTopHalf'>
            <div className='row'>
              <div className='col'>
                <CurrencyConvertor />
              </div>
            </div>
            <div className='row flex-column-reverse flex-md-row'>
              <div className='col col-12 col-sm-12 col-md-6'>
                <SelectRate />
              </div>
              <div className='col col-12 col-sm-12 col-md-6'>
                <SearchBar />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <TableRate />
            </div>
          </div>
        </div>
    }

    return content
  }
};

Live_Currency.proptypes = {
  get_Collect_Data: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  base: PropTypes.object.isRequired,
  symbols: PropTypes.object.isRequired,
  selectRate: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  date: state.date,
  base: state.base,
  symbols: state.symbols,
  selectRate: state.selectRate,
});

export default connect( mapStateToProps , { get_Collect_Data } )(Live_Currency);

//To fix :
// transition for open/close menu links
//landing responive