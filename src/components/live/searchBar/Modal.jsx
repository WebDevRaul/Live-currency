import React from 'react';
import PropTypes from 'prop-types';


import StyledModal from './Styled_Modal';

const Modal = ({ onClick, modal }) => {
  if(modal) return null;
  return (
    <StyledModal>
      <div className='modal'>
        <div className='inner-modal'>
          <span onClick={onClick}>close</span>
        </div>
      </div>
    </StyledModal>
  )
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired
}

export default Modal;