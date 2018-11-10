import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//Common
import isEmpty from '../common/isEmpty';

class TableRate extends Component {
  render() {
    const { today } = this.props.today;
    let baseRateList;
    if (!isEmpty(today)) {
      baseRateList = Object.keys(today).map(i => <p key={i}>{i} : {today[i]}</p>)
    }
    return (
      <table>
        <thead>
          <tr>
            <th>today</th>
            <th>Up or Down</th>
            <th>yesterdayDate</th>
            <th>lastYearDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{baseRateList}
            newRateToday</td>
            <td>!</td>
            <td>baseRatesYesterday
            newRateYesterday</td>
            <td>
              baseRatesLastYear
              newRateLastYear
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  today: state.today
})

export default connect(mapStateToProps, {})(TableRate)
