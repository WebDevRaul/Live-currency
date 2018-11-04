import React, { Component } from 'react';
import Currency from './Currency';
import SearchCurrency from './SearchCurrency';
import YesterdayCurrency from './YesterdayCurrency';

//Redux
import { connect } from 'react-redux';
import { getSelectRate } from '../../redux/actions/getSelectRate';
import { getBasicRates } from '../../redux/actions/getBasicRates';
import { getNewRates } from '../../redux/actions/getNewRates';
import LastYearRate from './LastYearRate';

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

    const NewRate = Object.keys(newRate).map(i => newRate[i]);
    const valRate = Object.keys(NewRate[1]).map(i => i);
    this.props.getNewRates(base, valRate);
  };

  
  render() {

    //Show Date
    const { date } = this.props.basicRates;
    const today = new Date(date).toDateString().substr(4);
    const yesterdayDate = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(date)).toDateString().substr(4);
    //change year
    const LastYear = new Date(date).getFullYear() - 1;
    const lastYearDate = ( today => new Date(today.setFullYear(LastYear)) )(new Date(date)).toDateString().substr(4);

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
    let yesterdayRates;
    if (!isEmpty(yesterdayRate)) {
      const  dataRate = Object.keys(yesterdayRate).map(i => yesterdayRate[i]);
      yesterdayRates = Object.keys(dataRate[0]).map(i => <YesterdayCurrency key={dataRate[0][i]} yesterday={dataRate[0][i]} />)
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

    //-------//-------//

    //Show last year Rate
    const { lastYearRate } = this.props.lastYearRate;
    let lastYearRates;

    //Checking for not empty
    if (!isEmpty(lastYearRate)) {
      const  dataRate = Object.keys(lastYearRate).map(i => lastYearRate[i]);
      lastYearRates = Object.keys(dataRate[0]).map(i => <LastYearRate key={dataRate[0][i]} lastYear={dataRate[0][i]} />)
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
              <th>{yesterdayDate}</th>
              <th>{lastYearDate}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {baseRatesList}
              {newRateList}
              <td>!</td>
              {yesterdayRates}
              {newRatedayBefore}
              <td>{lastYearRates}</td>
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
  lastYearRate: state.lastYearRate,
  newRate: state.newRate,
  yesterdayRate: state.yesterdayRate
});

export default connect(mapStateToProps, { getSelectRate, getBasicRates, getNewRates })(LiveCurrency);
