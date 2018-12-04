import React, { Component } from 'react'

export default class DateRate extends Component {
  render() {
    return (
      <tr>
        <td></td>
        <td>{this.props.dateToday}</td>
        <td>{this.props.dateYesterday}</td>
        <td>{this.props.dateLastYear}</td>
      </tr>
    )
  }
}
