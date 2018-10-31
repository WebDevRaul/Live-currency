import React, { Component } from 'react'

class YesterdayCurrency extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.yesterday}</td>
      </tr>
    )
  }
}

export default YesterdayCurrency;