import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import DateRate from './Date_Rate';
import BaseRate from './Base_Rate';
import NewRate from './New_Rate';

//Redux
import { connect } from 'react-redux';

//Common
import isEmpty from '../common/isEmpty';
import Spinner from '../common/Spinner';

//Css
import '../css/TableRate.css';

class TableRate extends Component {
  constructor() {
    super();
    this.state={}

    this.toFixed = this.toFixed.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const rateLoading = nextProps.rate.loading;
    const newRateLoading = nextProps.newRate.loading;

    if(rateLoading !== prevState.loading || newRateLoading !== prevState.newRateLoading) {
      return { rateLoading, newRateLoading };
   }
   else return null;
 };

  toFixed(result, data) {
    for (let i = 0; i < Object.keys(data).length; i++) {
      const name = Object.keys(data)[i];
      const values = Object.values(data)[i].toFixed(4);
      result.push({ name, values })
    }
  }

  render() {
    let fakeToday,fakeYesterday,fakeLastYear;
    if (!isEmpty(this.props.fakeDate.firstToday)) {
      fakeToday = this.props.fakeDate.firstToday;
      fakeYesterday = this.props.fakeDate.firstYesterday;
      fakeLastYear = this.props.fakeDate.firstLastYear;
    }
    
    //Date(s)
    let dateToday, dateYesterday, dateLastYear;

    const dataToday = (fakeToday ? fakeToday : this.props.date.today);
    const dataYesterday = (fakeYesterday ? fakeYesterday : this.props.date.yesterday);
    const dataLastYear = (fakeLastYear ? fakeLastYear : this.props.date.lastYear);

    if (!isEmpty(dataToday) || !isEmpty(dataYesterday) || !isEmpty(dataLastYear)) {
      dateToday = dataToday.toString();
      dateYesterday = dataYesterday.toString();
      dateLastYear = dataLastYear.toString(); 
    }

    //--------------//--------------//
    
    //Basic Rate(s)
    const { today, yesterday, lastYear } = this.props.rate;
    let baseRateName;
    let baseRateToday;
    let baseRateYesterday;
    let baseRateLastYear;

    //New today Obj .fixed(4)
    let todayObj = [];
    if (!isEmpty(today)) {
      this.toFixed(todayObj, today);
      if (!isEmpty(todayObj)) {
        baseRateToday = Object.keys(todayObj).map(i => <p key={i}>{todayObj[i].values}</p>)
      };
      if (!isEmpty(todayObj)) {
        baseRateName = Object.keys(todayObj).map(i => <p key={i}>{todayObj[i].name}</p>)
      }
    } else {
      baseRateToday = <p>{this.props.exchange.today}</p>;
    }

    //New yesterday Obj .fixed(4)
    let yesterdayObj = [];
    
    if (!isEmpty(yesterday)) {
      this.toFixed(yesterdayObj, yesterday);
      baseRateYesterday = Object.keys(yesterdayObj).map(i => <p key={i}>{yesterdayObj[i].values}</p>);
    } else {
      baseRateYesterday=<p>{this.props.exchange.yesterday}</p>;
    }

    //New lastYear Obj .fixed(4)
    let lastYearObj = [];
    if (!isEmpty(lastYear)) {
      this.toFixed(lastYearObj, lastYear);
      baseRateLastYear = Object.keys(lastYearObj).map(i => <p key={i}>{lastYearObj[i].values}</p> );
    } else {
      baseRateLastYear = <p>{this.props.exchange.lastYear}</p>;
    }

    //--------------//--------------//

    //New Rate(s)
    const { newRateToday, newRateYesterday, newRateLastYear } = this.props.newRate;

    let baseNewRateName;
    let baseNewRateToday;
    let baseNewRateYesterday;
    let baseNewRateLastYear;

    //New RateToday Obj .fixed(4)
    let newTodayObj = [];
    this.toFixed(newTodayObj, newRateToday);
    baseNewRateToday = Object.keys(newTodayObj).map(i => <p key={i}>{newTodayObj[i].values}</p>);
    baseNewRateName = Object.keys(newTodayObj).map(i => <p key={i}>{newTodayObj[i].name}</p>);


    //New RateYesterday Obj .fixed(4)
    let newYesterdayObj = [];
    if (!isEmpty(newRateYesterday)) {
      this.toFixed(newYesterdayObj, newRateYesterday);
      baseNewRateYesterday = Object.keys(newYesterdayObj).map(i => <p key={i}>{newYesterdayObj[i].values}</p>);
    } else {
      baseNewRateYesterday = <p>{this.props.exchange.yesterday}</p>
    }

    //New RateYesterday Obj .fixed(4)
    let newLastYearObj = [];
    this.toFixed(newLastYearObj, newRateLastYear);
    baseNewRateLastYear = Object.keys(newLastYearObj).map(i => <p  key={i} id={i}>{newLastYearObj[i].values}</p>);

    //--------------//--------------//

    //Loading Gif
    let newRateContent;

    if (this.state.newRateLoading === true && this.state.rateLoading !== true) {
      newRateContent = <tr><td colSpan={4}><Spinner /></td></tr>
    } else {
      newRateContent = <NewRate
                          baseNewRateName={baseNewRateName}
                          baseNewRateToday={baseNewRateToday}
                          baseNewRateYesterday={baseNewRateYesterday}
                          baseNewRateLastYear={baseNewRateLastYear}
                        />
    }

    if (this.state.rateLoading === true && this.state.newRateLoading === true) {
      newRateContent = <NewRate
                          baseNewRateName={baseNewRateName}
                          baseNewRateToday={baseNewRateToday}
                          baseNewRateYesterday={baseNewRateYesterday}
                          baseNewRateLastYear={baseNewRateLastYear}
                        /> 
    }

    return (
      <div>
        <div className='row'>
          <div className='col'>
            <table className='tableRate'>
              <thead className='tableRateHead'>
                <DateRate 
                  dateToday={dateToday} 
                  dateYesterday={dateYesterday}
                  dateLastYear={dateLastYear}
                />
              </thead>
              <tbody>
                <BaseRate
                  baseRateName={baseRateName}
                  baseRateToday={baseRateToday}
                  baseRateYesterday={baseRateYesterday}
                  baseRateLastYear={baseRateLastYear}
                />
                {newRateContent}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
};

TableRate.propTypes = {
  date: PropTypes.object.isRequired,
  rate: PropTypes.object.isRequired,
  newRate: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  date: state.date,
  fakeDate: state.fakeDate,
  rate: state.rate,
  newRate: state.newRate,
  exchange: state.exchange
});

export default connect(mapStateToProps, {  })(TableRate);
