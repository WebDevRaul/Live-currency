import React, { Component } from 'react';
import Currency from './Currency';
import SearchCurrency from './SearchCurrency';

//Redux
import { connect } from 'react-redux';
import { getBaseList } from '../../redux/actions/getBaseListAction';
import { getBaseRates } from '../../redux/actions/getBaseRatesAction';
import { getNewRates } from '../../redux/actions/getNewRatesAction';

//Css
import '../css/LiveCurrency.css';
import isEmpty from '../common/isEmpty';

class LiveCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: 'GBP',
      symbols:['USD','EUR','CAD','CHF','JPY'],
      newRate: [],
      errors: {},
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };



  componentDidMount() {
    const { base, symbols } = this.state

    this.props.getBaseList(base);
    this.props.getBaseRates(base, symbols);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
    if (nextProps.newRate) {
      this.setState({ newRate: nextProps.newRate })
    }
  };

  onChange(e) {
    this.setState({base: e.target.value});
  };

  onSubmit(e) {
    e.preventDefault();
    const { base, symbols, newRate } = this.state;
    this.props.getBaseRates(base, symbols);

    const NewRate = Object.keys(newRate).map(i => newRate[i]);
    const valRate = Object.keys(NewRate[1]).map(i => i);
    this.props.getNewRates(base, valRate);
  };


  
  render() {
    const { baseList } = this.props.baseList;
    const { baseRates } = this.props.baseRates;
    const { newRate } = this.state.newRate;
    
    const baseListOption = Object.keys(baseList).map(i => <option value={i} key={i}>{i}</option>)
    const baseRatesList = Object.keys(baseRates).map(i => <Currency key={i} name={i} data={baseRates[i]} />)

    let newRateList;
    if (!isEmpty(newRate)) {
      newRateList = Object.keys(newRate).map(i => <Currency key={i} name={i} data={newRate[i]} />)
    }
    
    
    return (
      <div className='liveCurrency'>
        <div className='row'>
          <div className='col'>
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
          </div>
          <div className='col'>
            <SearchCurrency base={this.state.base} />
          </div>
        </div>
        {baseRatesList}
        {newRateList}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  errors: state.errors,
  baseList: state.baseList,
  baseRates: state.baseRates,
  newRate: state.newRate
});

export default connect(mapStateToProps, { getBaseList, getBaseRates, getNewRates })(LiveCurrency);
