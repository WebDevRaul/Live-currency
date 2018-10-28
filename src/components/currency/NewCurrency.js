import React, { Component } from 'react';


class NewCurrency extends Component {
  render() {
    return (
      <div>
        {this.props.name} : {this.props.data}
      </div>
    )
  }
}

export default NewCurrency;
