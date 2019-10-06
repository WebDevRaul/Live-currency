import React, { Component } from 'react'

//Css
import '../css/TableRate.css';

export default class DateRate extends Component {
  render() {
    return (
      <tr className='tableRateDate'>
        <td></td>
        <td colSpan={2}>{this.props.dateToday}</td>
        <td>{this.props.dateYesterday}</td>
        <td>{this.props.dateLastYear}</td>
      </tr>
    )
  }
}
