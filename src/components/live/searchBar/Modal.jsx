import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_keys, select_isLoading } from '../../../redux/selectors/convertor';
import addToCountry from './utils/addCountry';

import StyledModal from './Styled_Modal';
import Data from './Data';

const Modal = ({ onClick, modal, arr, isLoading }) => {
  if(isLoading || !modal) return null;
  const { data } = addToCountry(arr);
  return (
    <StyledModal>
      <div className='modal'>
        <div className='inner-modal'>
          <button onClick={onClick}>close</button>
          <div className='list'>
            {
              data.map((i, index) => <Data key={index} data={i} />)
            }
          </div>
        </div>
      </div>
    </StyledModal>
  )
};

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