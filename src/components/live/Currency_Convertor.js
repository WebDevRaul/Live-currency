import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { get_Set_Currency } from '../../redux/actions/get_Set_Currency';
import { get_Update_Currency } from '../../redux/actions/get_Update_Currency';
import { get_Set_From } from '../../redux/actions/get_Set_From';
import { get_Set_To } from '../../redux/actions/get_Set_To';
import { get_Set_From_Val } from '../../redux/actions/get_Set_FromVal';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

//Css
import '../css/Currency.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { from } = nextProps.from;
    const { to } = nextProps.to;
    const { fromVal } = nextProps.fromVal;
    const { setCurrency } = nextProps.setCurrency;
    const { updateCurrency } = nextProps.updateCurrency;

    if( from !== prevState.from || to !== prevState.to || fromVal !== prevState.fromVal || setCurrency !== prevState.setCurrency || updateCurrency !== prevState.updateCurrency ) {
      return { from, to, fromVal, setCurrency, updateCurrency };
   }
   else return null;
 }

  componentDidMount(prevState, prevProps) {
    const { from, to } = this.state;
    this.props.get_Set_Currency(from, to);
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { from, to, fromVal } = this.state;
    if ( from !== prevProps.from.from || to !== prevProps.to.to || fromVal !== prevProps.fromVal.fromVal ) { 
      this.props.get_Update_Currency(from, to, fromVal);
    }
    if (from !== prevProps.from.from || to !== prevProps.to.to) {
      this.props.get_Set_Currency(from, to);
    }
  }
  
  render() {

    //Date
    const { today } = this.props.date;
    let date;
    if (!isEmpty(today)) {
      date = today.toString()
    }

    //--------------//--------------//

    const { from, to } = this.state;

    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    let data = Object.keys(selectRate).map(i => selectRate[i]);
    data.sort();
    const option = Object.keys(data).map(i => <option key={i}>{data[i]}</option>);

    //--------------//--------------//

    //setCurrency data back to string
    const placeholder = String(Object.values(this.state.setCurrency)[0]);
    const updateCurrency = String(this.state.updateCurrency);

    return (
      <div className='currency'>
        <form>
          <div className='row'>
            <div className='col'>
            <div>{date}</div>
            <div className='currency-base'>
              <p>
                <span className='currency-base-number'>1</span>
                <span className='currency-base-state'>{from}</span>
                <span className='currency-base-span'>is</span>
                {placeholder}
                <span className='currency-base-state'>{to}</span>
                </p>
              </div>
            </div>
            <div className='col'>
              <input
                className='currency-val'
                name='fromVal'
                type='text'
                onChange={(e) => this.props.get_Set_From_Val(e.target.value)}
                value={this.state.fromVal}
               />
                <select
                  className='currency-select'
                  name='from'
                  value={this.state.from}
                  onChange={(e) => this.props.get_Set_From(e.target.value)}
              >
                  <option defaultValue={from} />
                  {option}
                </select>
                <br />
              <input
                className='currency-val'
                name='toVal'
                type='text'
                value={updateCurrency === '[object Object]' ? placeholder : updateCurrency}
                onChange={(e) => console.log()}
              />
              <select
                className='currency-select'
                name='to'
                value={this.state.to}
                onChange={(e) => this.props.get_Set_To(e.target.value)}
              >
                <option defaultValue={to} />
                {option}
              </select>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

CurrencyConvertor.proptypes = {
  selectRate: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  get_Set_Currency: PropTypes.func.isRequired,
  get_Update_Currency: PropTypes.func.isRequired,
  get_Set_From: PropTypes.func.isRequired,
  get_Set_To: PropTypes.func.isRequired,
  get_Set_From_Val: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
  updateCurrency: PropTypes.object.isRequired,
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
  fromVal: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  selectRate: state.selectRate,
  date: state.date,
  setCurrency: state.setCurrency,
  updateCurrency: state.updateCurrency,
  from: state.from,
  to: state.to,
  fromVal: state.fromVal,
});

export default connect(mapStateToProps, { get_Set_Currency, get_Update_Currency, get_Set_From, get_Set_To, get_Set_From_Val })(CurrencyConvertor);
