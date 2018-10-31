import React, { Component } from 'react';

//Css
import '../css/Currency.css';

export default class Currency extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name} : {this.props.data}</td>
      </tr>
    )
  }
}
