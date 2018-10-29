import React, { Component } from 'react';
import Currency from './Currency';

//Redux
import { connect } from 'react-redux';
import { getBaseList } from '../../redux/actions/getBaseListAction';
import { getBaseRates } from '../../redux/actions/getBaseRatesAction';

//Css
import '../css/LiveCurrency.css';

class LiveCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      symbols:['USD','EUR','CAD','CHF','JPY'],
      errors: {},
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };



  componentDidMount() {
    const base = 'GBP'
    const { symbols } = this.state

    this.props.getBaseList(base);
    this.props.getBaseRates(base, symbols);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  };

  onChange(e) {
    this.setState({base: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const { base, symbols } = this.state;
    this.props.getBaseRates(base, symbols);
  }
  
  render() {
    const { baseList } = this.props.baseList;
    const { baseRates } = this.props.baseRates
    
    const baseListOption = Object.keys(baseList).map(i => <option value={i} key={i}>{i}</option>)
    const baseRatesList = Object.keys(baseRates).map(i => <Currency key={i} name={i} data={baseRates[i]} />)
    
    
    return (
      <div className='liveCurrency'>
        <form onSubmit={this.onSubmit}>
          <label>
            Change base Rate: 
            <select
              value= {this.state.base}
              onChange={this.onChange}
            >
              <option defaultValue='GBP'>GBP</option>
              {baseListOption}
            </select>
          </label>
          <button
            type='submit'
            value='Submit'
          >submit</button>
        </form>
        {baseRatesList}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  errors: state.errors,
  baseList: state.baseList,
  baseRates: state.baseRates,
});

export default connect(mapStateToProps, { getBaseList, getBaseRates })(LiveCurrency);
