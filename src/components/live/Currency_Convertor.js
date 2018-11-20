import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      from: 'GBP',
      to: 'AUD',
      fromVal: '',
      toVal: '',
      basicVal: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onKeyUp(from, to) {
    
  }

  render() {

    //Date
    const { today } = this.props.date;
    let date;
    if (!isEmpty(today)) {
      date = today.toString()
    }

    const { from, to, fromVal, toVal } = this.state;

    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    let data = Object.keys(selectRate).map(i => selectRate[i]);
    data.sort();
    const option = Object.keys(data).map(i => <option key={i}>{data[i]}</option>);

    return (
      <div>
        <div>
          <p>1 {from} equals</p>
          <p>{}... {to}</p>
          <p>{date}</p>
        </div>
        <form>
          <div className='row'>
            <div className='col'>
              <input
                type='text'
              />
              <select
                name='from'
                value={this.state.from}
                onChange={this.onChange}
                onKeyUp={this.onKeyUp}
              >
                <option defaultValue={from} />
                {option}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <input />
              <select
                name='to'
                value={this.state.to}
                onChange={this.onChange}
                onKeyUp={this.onKeyUp(from, to)}
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

const mapStateToProps = state => ({
  selectRate: state.selectRate,
  date: state.date,
})

export default connect(mapStateToProps, {})(CurrencyConvertor)
