import React, { Component } from 'react';
import Flag from 'react-world-flags'

//Css
import '../css/InfoModal.css';

class InfoModal extends Component {

  render() {
    const { firstHalf } = this.props;

    //Sort by country
    const compare = (a,b) => { 
      if (a.country < b.country) {return -1;} 
      if (a.country > b.country) {return 1;} 
      return 0;}

    //firstHalf
    const firstHalfData = Object.keys(firstHalf.sort(compare)).map(i => 
      <tr key={i}> 
        <td className='first-td'><span className='modal-flag'><Flag code={firstHalf[i].code} width={30} /></span> {firstHalf[i].country}</td>
        <td>{firstHalf[i].currency}</td>
        <td>{firstHalf[i].name}</td>
      </tr>);
    
    return (
      <div className='modal-div'>
        <div className='modal-content'>
          <table>
            <thead>
              <tr className='modal-thead'>
                <td>Country :</td>
                <td>Local currency :</td>
                <td>Code :</td>
              </tr>
            </thead>
            <tbody>
              {firstHalfData}
            </tbody>
          </table>
        <span className='modal-btn' onClick={this.props.onClose}>x</span>
        </div>
      </div>
    )
  }
}

export default InfoModal
