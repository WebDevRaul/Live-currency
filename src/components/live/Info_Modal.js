import React, { Component } from 'react';

//Css
import '../css/InfoModal.css';

class InfoModal extends Component {

  render() {
    const { firstHalf, secondHalf } = this.props;
    const firstHalfData = Object.keys(firstHalf).map(i => <p key={firstHalf[i].name}>{firstHalf[i].name}</p>);
    const secondHalfData = Object.keys(secondHalf).map(i => <p key={secondHalf[i].name}>{secondHalf[i].name}</p>);
    return (
      <div className='modal-div'>
        <div className='modal-content'>
          <div className='row'>
            <div className='col'>
              <div>
                {firstHalfData}  
              </div>
            </div>
            <div className='col'>
              {secondHalfData}
            </div>
          </div>
        <span className='modal-btn' onClick={this.props.onClose}>x</span>
        </div>
      </div>
    )
  }
}

export default InfoModal
