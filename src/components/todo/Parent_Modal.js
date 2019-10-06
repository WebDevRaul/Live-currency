import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Components
import InfoModal from './Info_Modal';

class ParentModal extends Component {
  constructor(props) {
    super(props)

    this.toCloseModal=this.toCloseModal.bind(this);
  }

  toCloseModal() {
    this.props.toClose();
  }

  render() {
    return (
      <div className='modal-div'>
        <InfoModal
          flagObj={this.props.flagObj}
          toClose={this.toCloseModal}
        />
      </div>
    )
  }
}

ParentModal.propTypes = {
  toClose: PropTypes.func.isRequired,
}

export default ParentModal;
