import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//Css
import '../css/LiveCurrency.css'

class Live_Currency extends Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {}
    }
  }

  componentDidMount() {
    this.props.getSelect_Rate();
  }

  render() {
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
                <option defaultValue='GBP'>GBP</option>
                .....
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
          searchBar
        </div>
      </div>
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
    </div>
    )
  }
}

export default connect(null)(Live_Currency);
