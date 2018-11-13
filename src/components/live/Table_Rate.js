import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//Common
import isEmpty from '../common/isEmpty';

class TableRate extends Component {
  render() {
    let sort;

    //Today Rates
    const { today } = this.props.rate;
    let baseRateToday;
    if (!isEmpty(today)) {
      //Sort Rates
      sort = Object.keys(today)
        .sort()
          .reduce((sortObj, key) => ({
            ...sortObj, [key]: today[key]
          }), {});
      baseRateToday = Object.keys(sort).map(i => <p key={i}>{i} : {sort[i]}</p>);
    };

    //--------------//--------------//

    //Yesterday Rates
    const { yesterday } = this.props.rate;
    let baseRateYesterday;
    if (!isEmpty(yesterday)) {
      //Sort Rates
      sort = Object.keys(yesterday)
        .sort()
        .reduce((sortObj, key) => ({
          ...sortObj, [key]: yesterday[key]
        }), {});
      baseRateYesterday = Object.keys(sort).map(i => <p key={i}>{sort[i]}</p>);
    };

    //--------------//--------------//

    //LastYear Rates
    const { lastYear } = this.props.rate;
    let baseRateLastYear;
    if (!isEmpty(lastYear)) {
      //Sort Rates
      sort = Object.keys(lastYear)
        .sort()
        .reduce((sortObj, key) => ({
          ...sortObj, [key]: lastYear[key]
        }), {});
      baseRateLastYear = Object.keys(sort).map(i => <p key={i}>{sort[i]}</p>);
    };

    //--------------//--------------//

    //NewRateToday Rate(s)
    const { newRateToday } = this.props.newRate;
    let baseNewRateToday;
    if (!isEmpty(newRateToday)) {
      //Sort Rates
      sort = Object.keys(newRateToday)
        .sort()
        .reduce((sortObj, key) => ({
          ...sortObj, [key]: newRateToday[key]
        }), {});
      baseNewRateToday = Object.keys(sort).map(i => <p key={i}>{i} : {sort[i]}</p>);
    }

    //--------------//--------------//

    //NewRateYesterday Rate(s)
    const { newRateYesterday } = this.props.newRate;
    let baseNewRateYesterday;
    sort = Object.keys(newRateYesterday)
      .sort()
      .reduce((sortObj, key) => ({
        ...sortObj, [key]: newRateYesterday[key]
      }), {});
    baseNewRateYesterday = Object.keys(sort).map(i => <p key={i}>{sort[i]}</p>);

    //--------------//--------------//

    //NewRateLastYear
    const { newRateLastYear } = this.props.newRate;
    let baseNewRateLastYear;
    sort = Object.keys(newRateLastYear)
      .sort()
      .reduce((sortObj, key) => ({
        ...sortObj, [key]: newRateLastYear[key]
      }), {})
    baseNewRateLastYear = Object.keys(sort).map(i => <p key={i}>{sort[i]}</p>)

    return (
      <table>
        <thead>
          <tr>
            <th>today</th>
            <th>Up or Down</th>
            <th>yesterday</th>
            <th>lastYearDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{baseRateToday}</td>
            <td>!</td>
            <td>{baseRateYesterday}</td>
            <td>{baseRateLastYear}</td>
          </tr>
          <tr>
            <td>{baseNewRateToday}</td>
            <td>!</td>
            <td>{baseNewRateYesterday}</td>
            <td>{baseNewRateLastYear}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  rate: state.rate,
  newRate: state.newRate
})

export default connect(mapStateToProps, {})(TableRate)
