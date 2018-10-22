import React, { Component } from 'react'

export default class Currency extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}: <span>{this.props.data}</span></p>
      </div>
    )
  }
}
