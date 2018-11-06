import React, { Component } from 'react'

class TableRate extends Component {
  render() {
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
            <td>baseRatesList
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

export default TableRate;
