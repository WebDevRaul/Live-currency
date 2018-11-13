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
        }), {})
      baseRateToday = Object.keys(sort).map(i => <p key={i}>{i} : {sort[i]}</p>)
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
      }), {})
      baseRateYesterday = Object.keys(sort).map(i => <p key={i}>{sort[i]}</p>)
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
      }), {})
      baseRateLastYear = Object.keys(sort).map(i => <p key={i}>{sort[i]}</p>)
    };

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
            <td>{baseRateToday}
            newRateToday</td>
            <td>!</td>
            <td>{baseRateYesterday}
            newRateYesterday</td>
            <td>
              {baseRateLastYear}
              newRateLastYear
            </td>
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
