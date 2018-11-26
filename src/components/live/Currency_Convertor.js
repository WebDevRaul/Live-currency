import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { get_Set_Currency } from '../../redux/actions/get_Set_Currency';
import { get_Set_From } from '../../redux/actions/get_Set_From';
import { get_Set_To } from '../../redux/actions/get_Set_To';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

//Css
import '../css/Currency.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.onChange = this.onChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { from } = nextProps.from;
    const { to } = nextProps.to;

    if( from !== prevState.from || to !== prevState.to){
      return { 
        from, to
      };
   }
   else return null;
 }

  componentDidMount(prevState, prevProps) {
    const { from, to } = this.state;
    this.props.get_Set_Currency(from, to);
    // this.props.get_Set_Currency({from:'GBP', to:'AUD', fromVal: '1'})
  };

  onChange(e) {
    // this.setState({ [e.target.name]: e.target.value })
    // this.props.get_Set_Currency({ [e.target.name]: e.target.value })
  };

  render() {

    //Date
    const { today } = this.props.date;
    let date;
    if (!isEmpty(today)) {
      date = today.toString()
    }

    //--------------//--------------//

    //Currency val
    const { setCurrency } = this.props.setCurrency;
    let defaultCurrency;
    if (!isEmpty(setCurrency)) {
      defaultCurrency=Object.keys(setCurrency).map(i => setCurrency[i])
    }

    //--------------//--------------//

    const { from, to } = this.state;

    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    let data = Object.keys(selectRate).map(i => selectRate[i]);
    data.sort();
    const option = Object.keys(data).map(i => <option key={i}>{data[i]}</option>);

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
                {defaultCurrency}
                <span className='currency-base-state'>{to}</span>
                </p>
              </div>
            </div>
            <div className='col'>
              <input
                className='currency-val'
                name='fromVal'
                type='text'
                onChange={(e) => this.props.get_Set_From(e)}
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
                onChange={this.onChange}
                value={this.state.toVal}
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
  get_Set_Currency: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  selectRate: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  selectRate: state.selectRate,
  date: state.date,
  setCurrency: state.setCurrency,
  from: state.from,
  to: state.to
});

export default connect(mapStateToProps, { get_Set_Currency, get_Set_From, get_Set_To })(CurrencyConvertor);
