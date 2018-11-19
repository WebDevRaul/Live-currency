import React, { Component } from 'react'

class InfoModal extends Component {
  render() {
    return (
      <div className='modal-div'>
        <div className='modal-content'>
          modal
        <span className='modal-btn' onClick={this.props.onClose}>x</span>
        </div>
      </div>
    )
  }
}

export default InfoModal
