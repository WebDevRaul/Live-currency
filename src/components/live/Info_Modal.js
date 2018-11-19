import React, { Component } from 'react';

//Css
import '../css/InfoModal.css';

class InfoModal extends Component {

  render() {
    const { firstHalf, secondHalf } = this.props;
    return (
      <div className='modal-div'>
        <div className='modal-content'>
          <div className='row'>
            <div className='col'>
              <div>
                {firstHalf}  
              </div>
            </div>
            <div className='col'>
              {secondHalf}
            </div>
          </div>
        <span className='modal-btn' onClick={this.props.onClose}>x</span>
        </div>
      </div>
    )
  }
}

export default InfoModal
