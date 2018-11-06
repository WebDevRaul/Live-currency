import React, { Component } from 'react'

class Table_Rate extends Component {
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
            baseRatesList
            newRateToday
            <td>!</td>
            baseRatesYesterday
            newRateYesterday
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

export default Table_Rate;
