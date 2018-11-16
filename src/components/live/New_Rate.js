import React, { Component } from 'react'

export default class New_Rate extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.baseNewRateToday}</td>
        <td>{this.props.baseNewRateYesterday}</td>
        <td>{this.props.baseNewRateLastYear}</td>
      </tr>
    )
  }
}
