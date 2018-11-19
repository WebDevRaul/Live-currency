import React, { Component } from 'react';
import Flag from 'react-world-flags'

//Css
import '../css/InfoModal.css';

class InfoModal extends Component {

  render() {
    const { firstHalf, secondHalf } = this.props;

    //firstHalf
    const firstHalfData = Object.keys(firstHalf).map(i => 
    <div key={i}> 
      <p>{firstHalf[i].country}</p> 
      <span><Flag code={firstHalf[i].code} width={16} /></span>
    </div>);

    //secondHalf
    const secondHalfData = Object.keys(secondHalf).map(i => 
      <div key={i}> 
        <p>{secondHalf[i].country}</p> 
        <span><Flag code={secondHalf[i].code} width={16} /></span>
      </div>);

    
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
              <div>
                 {secondHalfData}
              </div>
            </div>
          </div>
        <span className='modal-btn' onClick={this.props.onClose}>x</span>
        </div>
      </div>
    )
  }
}

export default InfoModal
