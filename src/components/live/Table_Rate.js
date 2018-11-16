import React, { Component } from 'react';
import DateRate from './Date_Rate';
import BaseRate from './Base_Rate';
import NewRate from './New_Rate';

//Redux
import { connect } from 'react-redux';

//Common
import isEmpty from '../common/isEmpty';

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

    if (!isEmpty(today)) {
      baseRateToday = Object.keys(today).map(i => <p key={i}>{i} : {today[i]}</p>);
    };
    if (!isEmpty(yesterday)) {
      baseRateYesterday = Object.keys(yesterday).map(i => <p key={i}>{yesterday[i]}</p>);
    };

    if (!isEmpty(lastYear)) {
      baseRateLastYear = Object.keys(lastYear).map(i => <p key={i}>{lastYear[i]}</p> );
    };

    //--------------//--------------//

    //New Rate(s)
    const { newRateToday, newRateYesterday, newRateLastYear } = this.props.newRate;

    let baseNewRateToday;
    let baseNewRateYesterday;
    let baseNewRateLastYear;

    if (!isEmpty(newRateToday)) {
      baseNewRateToday = Object.keys(newRateToday).map(i => <p key={i}>{i} : {newRateToday[i]}</p>);
    }
    if (!isEmpty(newRateYesterday)) {
      baseNewRateYesterday = Object.keys(newRateYesterday).map(i => <p key={i}>{newRateYesterday[i]}</p>);
    }
    if (!isEmpty(newRateLastYear)) {
      baseNewRateLastYear = Object.keys(newRateLastYear).map(i => <p  key={i} id={i}>{newRateLastYear[i]}</p>);
    }

    return (
      <div>
        <div className='row'>
          <div className='col'>
            <table>
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
}

const mapStateToProps = state => ({
  date: state.date,
  rate: state.rate,
  newRate: state.newRate,
  arrow: state.arrow
})

export default connect(mapStateToProps, { })(TableRate)
