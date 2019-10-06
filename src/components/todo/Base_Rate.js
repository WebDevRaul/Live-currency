import React, { Component } from 'react';

class BaseRate extends Component {
  render() {
    return (
      <tr className='tableRateBaseRate'>
        <td>{this.props.baseRateName}</td>
        <td>{this.props.baseRateToday}</td>
        <td>{this.props.baseRateYesterday}</td>
        <td>{this.props.baseRateLastYear}</td>
      </tr>
    )
  }
};

export default BaseRate;
