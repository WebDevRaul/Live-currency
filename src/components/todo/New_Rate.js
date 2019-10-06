import React, { Component } from 'react';

//Css
import '../css/TableRate.css';

export default class New_Rate extends Component {
  render() {
    return (
      <tr className='tableRateBaseRate'>
        <td>{this.props.baseNewRateName}</td>
        <td>{this.props.baseNewRateToday}</td>
        <td>{this.props.baseNewRateYesterday}</td>
        <td>{this.props.baseNewRateLastYear}</td>
      </tr>
    )
  }
}
