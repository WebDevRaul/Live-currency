import React, { Component } from 'react'

export default class Currency extends Component {
  render() {
    return (
      <div>
        {this.props.data.date}
      </div>
    )
  }
}
