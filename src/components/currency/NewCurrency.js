import React, { Component } from 'react';

//Css
import '../css/NewCurrency.css'

class NewCurrency extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.yesterday}</td>
      </tr>
    )
  }
}

export default NewCurrency;
