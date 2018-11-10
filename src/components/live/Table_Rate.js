import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//Common
import isEmpty from '../common/isEmpty';

class TableRate extends Component {
  render() {

    //Today Rates
    const { today } = this.props.today;
    let baseRateToday;
    if (!isEmpty(today)) {
      baseRateToday = Object.keys(today).map(i => <p key={i}>{i} : {today[i]}</p>)
    };

    //--------------//--------------//

    //Yesterday Rates
    const { yesterday } = this.props.yesterday;
    let baseRateYesterday;
    if (!isEmpty(yesterday)) {
      const data = Object.keys(yesterday).map(i => yesterday[i]);
      baseRateYesterday = Object.keys(data[0]).map(i => <p key={i}>{data[0][i]}</p>)
    }

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
  today: state.today,
  yesterday: state.yesterday
})

export default connect(mapStateToProps, {})(TableRate)
