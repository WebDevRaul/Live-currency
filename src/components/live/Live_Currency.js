import React, { Component } from 'react';

//Components
import SelectRate from './Select_Rate';
import TableRate from './Table_Rate';
import SearchBar from './Search_Bar';
import CurrencyConvertor from './Currency_Convertor';

//Redux
import { connect } from 'react-redux';
import { get_Collect_Data } from '../../redux/actions/get_Collect_Data';

//Common
import Spinner from '../common/Spinner';

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
  
  componentDidMount() {
    this.props.get_Collect_Data();
  }
  
  render() {

    //Loading Gif
    let content;
    const { loadingSelectRate, loadingDate, loadingBase, loadingSymbols } = this.state;
    if (loadingSelectRate === true || loadingDate === true || loadingBase === true || loadingSymbols === true) {
      content = <div className='row'><div className='col'><Spinner /></div></div>
    } else {
      content = 
        <div className='liveCurrency'>
          <div className='liveCurrencyTopHalf'>
            <div className='row'>
              <div className='col'>
                <CurrencyConvertor />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <SelectRate />
              </div>
              <div className='col'>
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

    return (
      content
    )
  }
};

const mapStateToProps = state => ({
  errors: state.errors,
  selectRate: state.selectRate,
  date: state.date,
  base: state.base,
  symbols: state.symbols
});

export default connect( mapStateToProps , { get_Collect_Data } )(Live_Currency);