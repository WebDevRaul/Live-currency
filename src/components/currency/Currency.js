import React, { Component } from 'react';

//Css
import '../css/Currency.css';

export default class Currency extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.name} : {this.props.data}</td>
          <td>!</td>
          <td>yesteday</td>
          <td>last year</td>
        </tr>
      </tbody>
    )
  }
}
