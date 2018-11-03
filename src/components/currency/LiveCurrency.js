import React, { Component } from 'react';
import Currency from './Currency';
import SearchCurrency from './SearchCurrency';
import YesterdayCurrency from './YesterdayCurrency';

//Redux
import { connect } from 'react-redux';
import { getSelectRate } from '../../redux/actions/getSelectRate';
import { getBasicRates } from '../../redux/actions/getBasicRates';
import { getNewRates } from '../../redux/actions/getNewRates';

//Css
import '../css/LiveCurrency.css';
import isEmpty from '../common/isEmpty';
import NewCurrency from './NewCurrency';

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
    const { base, symbols } = this.state;
    
    this.props.getSelectRate();
    this.props.getBasicRates(base, symbols);
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
    this.props.getBasicRates(base, symbols);
  };

  
  render() {

    //Show Date
    const { date } = this.props.basicRates;
    const today = new Date(date).toDateString().substr(4);
    const yesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(date)).toDateString().substr(4);
    //i dont like how it is(might not be accurate in future [364/365 days per year]) to fix
    const lastYear = ( today => new Date(today.setDate(today.getDate() - 365)) )(new Date(date)).toDateString();

    //-------//-------//

    //Select Base-Rate
    const { selectRate } = this.props.selectRate;
    const baseRateOption = Object.keys(selectRate).map(i => <option value={i} key={i}>{i}</option>);

    //-------//-------//

    //Map Obj and display in Currency component
    const { basicRates } = this.props.basicRates;
    const baseRatesList = Object.keys(basicRates).map(i => <Currency key={i} name={i} data={basicRates[i]} id={i} />);

    //-------//-------//

    //Show yesterday rates in yesterdayCurrency Component
    const { yesterdayRate } = this.props.yesterdayRate; 
    let dayBefore;
    if (!isEmpty(yesterdayRate)) {
      const  data = Object.keys(yesterdayRate).map(i => yesterdayRate[i])
      dayBefore = Object.keys(data[0]).map(i => <YesterdayCurrency key={data[0][i]} yesterday={data[0][i]} />)
    };

    //-------//-------//

    //Show new Rate
    const { newRate } = this.state.newRate;

    //Checking for not empty
    let newRateList;
    if (!isEmpty(newRate)) {
      newRateList = Object.keys(newRate).map(i => <Currency key={i} name={i} data={newRate[i]} />)
    };

    //-------//-------//

    //Show yesterday new Rate
    const { yesterdayNewRate } = this.props.newRate;
    let newRatedayBefore;

    //Checking for not empty
    if (!isEmpty(yesterdayNewRate)) {
      const  dataNewRate = Object.keys(yesterdayNewRate).map(i => yesterdayNewRate[i]);
      newRatedayBefore = Object.keys(dataNewRate[0]).map(i => <NewCurrency key={dataNewRate[0][i]} yesterday={dataNewRate[0][i]} />);
    };
    
    
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
                  <option defaultValue={this.state.base}>{this.state.base}</option>
                  {baseRateOption}
                </select>
              </label>
              <button
                className='live'
                type='submit'
                value='Submit'
              >submit</button>
            </form>
          </div>
          <div className='col'>
            <SearchCurrency base={this.state.base} />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>{today}</th>
              <th>Up or Down</th>
              <th>{yesterday}</th>
              <th>{lastYear}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {baseRatesList}
              {newRateList}
              <td>!</td>
              {dayBefore}
              {newRatedayBefore}
              <td>last year</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  errors: state.errors,
  selectRate: state.selectRate,
  basicRates: state.basicRates,
  newRate: state.newRate,
  yesterdayRate: state.yesterdayRate
});

export default connect(mapStateToProps, { getSelectRate, getBasicRates, getNewRates})(LiveCurrency);
