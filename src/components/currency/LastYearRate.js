import React, { Component } from 'react'

class LastYearRate extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.lastYear}</td>
      </tr>
    )
  }
}

export default LastYearRate;