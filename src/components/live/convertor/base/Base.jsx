import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_base, select_to, select_value } from '../../../../redux/selectors/live';

import Span from '../../../common/span/Span';

const Base = ({ base, to, value }) => (
  <>
    <Span text={'1'}/>
    <Span text={base}/>
    <Span text={'is'}/>
    <Span text={value}/>
    <Span text={to}/>
  </>
);

Base.propTypes = {
  base: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  base: select_base,
  to: select_to,
  value: select_value
});

export default connect(mapStateToProps, null)(Base);