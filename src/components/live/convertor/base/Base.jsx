import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_from, select_to, select_value, select_isLoading } from '../../../../redux/selectors/live';

import Span from '../../../common/span/Span';
import Spinner from '../../../common/spinner/Spinner';

const Base = ({ from, to, value, isLoading }) => (
  <>
    <Span text={'1'}/>
    <Span text={from}/>
    <Span text={'is'}/>
    {isLoading ? <Spinner /> : <Span text={value}/>}
    <Span text={to}/>
  </>
);

Base.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  from: select_from,
  to: select_to,
  value: select_value,
  isLoading: select_isLoading
});

export default connect(mapStateToProps, null)(Base);