import React, { Component } from 'react';
import Modal from './Modal';

class Icon extends Component {
  state = {
    modal: true
  }

  onClick = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal })
  }

  render() {
    const { modal } = this.state;
    return (
      <div className='info'>
        <div onClick={this.onClick}>
          <i className="fas fa-info"></i>
        </div>
        <Modal onClick={this.onClick} modal={modal} />
      </div>
    )
  }
}

export default Icon;