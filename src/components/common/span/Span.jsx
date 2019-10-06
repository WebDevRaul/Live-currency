import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ text }) => (
  <span>{text}</span>
)

Span.propTypes = {
  text: PropTypes.string.isRequired
}

export default Span;