import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { get_Currency } from '../../redux/actions/get_Currency';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

//Css
import '../css/Currency.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 'GBP',
      to: 'AUD',
      fromVal: '1',
      toVal: '',
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.get_Currency(this.state.from, this.state.to)
  };

  componentWillReceiveProps(nextProps) {
    const { currency } = nextProps.currency
    if (currency !== this.state.toVal) {
      this.setState({ 
        toVal: Object.keys(currency).map(i => currency[i])
       });
    };
  };

  // componentDidUpdate(prevState) {
  //   if (prevState.fromVal !== this.state.fromVal) {
  //     const { fromVal, toVal } = this.state;
  //     let a,b;
  //     a=parseFloat(fromVal);
  //     b=parseFloat(toVal[0]);
  //     const onConvertTo = (a, b) => a * b;
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
    const { currency } = this.props.currency;
    let currencyVal;
    if (!isEmpty(currency)) {
      currencyVal=Object.keys(currency).map(i => currency[i])
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
                {currencyVal} 
                <span className='currency-base-state'>{to}</span>
                </p>
              </div>
            </div>
            <div className='col'>
              <input
                className='currency-val'
                name='fromVal'
                type='text'
                onChange={this.onChange}
                value={this.state.fromVal}
               />
                <select
                  className='currency-select'
                  name='from'
                  value={this.state.from}
                  onChange={this.onChange}
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
                onChange={this.onChange}
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
  get_Currency: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  selectRate: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  selectRate: state.selectRate,
  date: state.date,
  currency: state.currency
});

export default connect(mapStateToProps, { get_Currency })(CurrencyConvertor);
