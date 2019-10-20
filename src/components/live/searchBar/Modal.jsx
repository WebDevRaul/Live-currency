import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_keys, select_isLoading } from '../../../redux/selectors/convertor';
import addToCountry from './utils/addCountry';

import StyledModal from './Styled_Modal';
import Data from './Data';

class Modal extends Component {

  buttonRef = React.createRef();
  outsideRef = React.createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    const { current } = this.outsideRef;
    if(current === null) return null;
    if(e.target.className !== 'modal') return null;
    this.props.onClick();
  };

  onScroll = () => {
    // document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    this.buttonRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { isLoading, modal, arr, onClick } = this.props;
    if(isLoading || !modal) return null;
    const { data } = addToCountry(arr);
    return (
      <StyledModal>
        <div className='modal' ref={this.outsideRef}>
          <div className='inner-modal'>
            <button onClick={onClick} ref={this.buttonRef}>close</button>
            <div className='list'>
              {
                data.map((i, index) => <Data key={index} data={i} />)
              }
              <div className='arrow' onClick={this.onScroll}><i className="far fa-2x fa-arrow-alt-circle-up"></i></div>
            </div>
          </div>
        </div>
      </StyledModal>
    )
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  arr: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  arr: select_keys,
  isLoading: select_isLoading
});

export default connect( mapStateToProps, null )(Modal);