import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_from, select_to, select_value } from '../../../../redux/selectors/live';

import Span from '../../../common/span/Span';

const Base = ({ from, to, value }) => (
  <>
    <Span text={'1'}/>
    <Span text={from}/>
    <Span text={'is'}/>
    <Span text={value}/>
    <Span text={to}/>
  </>
);

Base.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  from: select_from,
  to: select_to,
  value: select_value
});

export default connect(mapStateToProps, null)(Base);