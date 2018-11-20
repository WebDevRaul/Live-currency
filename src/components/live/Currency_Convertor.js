import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
      fromVal: '',
      toVal: '',
      base: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.base.base !== this.props.base.base) {
      const { base } = nextProps.base;
      this.setState({ base })
    }
  }

  onChange(e) {
    this.setState({
      
    })
  }
  render() {
    let base;
    if (!isEmpty(this.props.base.base)) {
      base = this.props.base.base
    }

    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    let data = Object.keys(selectRate).map(i => selectRate[i]);
    data.sort();
    const option = Object.keys(data).map(i => <option key={i}>{data[i]}</option>);

    return (
      <div>
        <div>
          <p>1 {} equals</p>
          <p>{} {}</p>
          <p>{}</p>
        </div>
        <form>
          <div className='row'>
            <div className='col'>
              <input
                type='text'
              />
              <select
                value={this.state.from}
                onChange={this.onChange}
              >
                <option defaultValue={base}>
                  {base}
                </option>
                {option}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <input />
              <select>
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
  base: state.base,
  selectRate: state.selectRate,
})

export default connect(mapStateToProps, {})(CurrencyConvertor)
