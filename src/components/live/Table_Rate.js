import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateRate from './Date_Rate';
import BaseRate from './Base_Rate';
import NewRate from './New_Rate';

//Redux
import { connect } from 'react-redux';

//Common
import isEmpty from '../common/isEmpty';

//Css
import '../css/TableRate.css';

class TableRate extends Component {
  render() {
    
    //Date(s)
    let dateToday, dateYesterday, dateLastYear;

    const dataToday = this.props.date.today;
    const dataYesterday = this.props.date.yesterday;
    const dataLastYear = this.props.date.lastYear;

    if (!isEmpty(dataToday) || !isEmpty(dataYesterday) || !isEmpty(dataLastYear)) {
      dateToday = dataToday.toString();
      dateYesterday = dataYesterday.toString();
      dateLastYear = dataLastYear.toString(); 
    }

    //--------------//--------------//
    
    //Basic Rate(s)
    const { today, yesterday, lastYear } = this.props.rate;
    let baseRateToday;
    let baseRateYesterday;
    let baseRateLastYear;

    //New today Obj .fixed(4)
    let todayObj = [];
    if (!isEmpty(today)) {
      for (let i = 0; i < Object.keys(today).length; i++) {
        const name = Object.keys(today)[i];
        const values = Object.values(today)[i].toFixed(4);
        todayObj.push({ name, values })
      }
    }

    //New yesterday Obj .fixed(4)
    let yesterdayObj = [];
    if (!isEmpty(yesterday)) {
      for (let i = 0; i < Object.keys(yesterday).length; i++) {
        const name = Object.keys(yesterday)[i];
        const values = Object.values(yesterday)[i].toFixed(4);
        yesterdayObj.push({ name, values })
      }
    }

    //New lastYear Obj .fixed(4)
    let lastYearObj = [];
    if (!isEmpty(lastYear)) {
      for (let i = 0; i < Object.keys(lastYear).length; i++) {
        const name = Object.keys(lastYear)[i];
        const values = Object.values(lastYear)[i].toFixed(4);
        lastYearObj.push({ name, values })
      }
    }
    
    if (!isEmpty(todayObj)) {
      baseRateToday = Object.keys(todayObj).map(i => <p key={i}>{todayObj[i].name} : {todayObj[i].values}</p>)
    };
    
    if (!isEmpty(yesterdayObj)) {
      baseRateYesterday = Object.keys(yesterdayObj).map(i => <p key={i}>{yesterdayObj[i].values}</p>);
    };

    if (!isEmpty(lastYearObj)) {
      baseRateLastYear = Object.keys(lastYearObj).map(i => <p key={i}>{lastYearObj[i].values}</p> );
    };

    //--------------//--------------//

    //New Rate(s)
    const { newRateToday, newRateYesterday, newRateLastYear } = this.props.newRate;

    let baseNewRateToday;
    let baseNewRateYesterday;
    let baseNewRateLastYear;

    //New RateToday Obj .fixed(4)
    let newTodayObj = [];
    if (!isEmpty(newRateToday)) {
      for (let i = 0; i < Object.keys(newRateToday).length; i++) {
        const name = Object.keys(newRateToday)[i];
        const values = Object.values(newRateToday)[i].toFixed(4);
        newTodayObj.push({ name, values })
      }
    }

    if (!isEmpty(newTodayObj)) {
      baseNewRateToday = Object.keys(newTodayObj).map(i => <p key={i}>{newTodayObj[i].name} : {newTodayObj[i].values}</p>);
    }

    //New RateYesterday Obj .fixed(4)
    let newYesterdayObj = [];
    if (!isEmpty(newRateYesterday)) {
      for (let i = 0; i < Object.keys(newRateYesterday).length; i++) {
        const name = Object.keys(newRateYesterday)[i];
        const values = Object.values(newRateYesterday)[i].toFixed(4);
        newYesterdayObj.push({ name, values })
      }
    }

    if (!isEmpty(newYesterdayObj)) {
      baseNewRateYesterday = Object.keys(newYesterdayObj).map(i => <p key={i}>{newYesterdayObj[i].values}</p>);
    }

    //New RateYesterday Obj .fixed(4)
    let newLastYearObj = [];
    if (!isEmpty(newRateLastYear)) {
      for (let i = 0; i < Object.keys(newRateLastYear).length; i++) {
        const name = Object.keys(newRateLastYear)[i];
        const values = Object.values(newRateLastYear)[i].toFixed(4);
        newLastYearObj.push({ name, values })
      }
    }

    if (!isEmpty(newLastYearObj)) {
      baseNewRateLastYear = Object.keys(newLastYearObj).map(i => <p  key={i} id={i}>{newLastYearObj[i].values}</p>);
    }

    return (
      <div>
        <div className='row'>
          <div className='col'>
            <table className='tableRate'>
              <thead>
                <DateRate 
                  dateToday={dateToday} 
                  dateYesterday={dateYesterday}
                  dateLastYear={dateLastYear}
                />
              </thead>
              <tbody>
                <BaseRate
                  baseRateToday={baseRateToday}
                  baseRateYesterday={baseRateYesterday}
                  baseRateLastYear={baseRateLastYear}
                />
              </tbody>
              <tbody>
                <NewRate
                  baseNewRateToday={baseNewRateToday}
                  baseNewRateYesterday={baseNewRateYesterday}
                  baseNewRateLastYear={baseNewRateLastYear}
                />
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
  rate: state.rate,
  newRate: state.newRate,
});

export default connect(mapStateToProps, {  })(TableRate);
