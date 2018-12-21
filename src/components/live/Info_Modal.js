import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

//Css
import '../css/InfoModal.css';

class InfoModal extends Component {
  constructor(props) {
    super(props);
    this.state={
      intervalId: 0
    }
    this.onModal = this.onModal.bind(this);
  }

  onModal() {
    this.props.toClose()
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.props.toClose();
    }
  };

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  onScroll=(e) => {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    const { flagObj } = this.props;

    //Sort by country
    const compare = (a,b) => { 
      if (a.country < b.country) {return -1;} 
      if (a.country > b.country) {return 1;} 
      return 0;}

    //Flag modal
    const flagModal = Object.keys(flagObj.sort(compare)).map(i => 
      <tr key={i}> 
        <td className='first-td'><span className='modal-flag'><Flag code={flagObj[i].code} width={30} /></span> {flagObj[i].country}</td>
        <td>{flagObj[i].currency}</td>
        <td>{flagObj[i].name}</td>
      </tr>);
    
    return (
      <div ref={this.myRef} className='modal-center'>
        <div className='modal-content'>
          <table className='modal-table'>
            <thead>
              <tr className='modal-thead'>
                <td>Country :</td>
                <td>Local currency :</td>
                <td>Code :</td>
              </tr>
            </thead>
            <tbody>
              {flagModal}
            </tbody>
          </table>
        <span className='modal-btn' onClick={this.props.toClose}>close</span>
        <p
          onClick={this.onScroll}
        >up</p>
        </div>
      </div>
    )
  }
};

InfoModal.propTypes = {
  flagObj: PropTypes.array.isRequired,
  toClose: PropTypes.func.isRequired,
}

export default InfoModal;
