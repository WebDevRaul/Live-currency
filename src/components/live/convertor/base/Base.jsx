import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_C_from_base, select_to_base, select_value, select_isLoading } from '../../../../redux/selectors/convertor';

import Span from '../../../common/span/Span';
import Spinner from '../../../common/spinner/Spinner';

const Base = ({ from_base, to_base, value, isLoading }) => (
  <>
    <Span text={'1'}/>
    <Span text={from_base}/>
    <Span text={'is'}/>
    {isLoading ? <Spinner /> : <Span text={value}/>}
    <Span text={to_base}/>
  </>
);

Base.propTypes = {
  from_base: PropTypes.string.isRequired,
  to_base: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  from_base: select_C_from_base,
  to_base: select_to_base,
  value: select_value,
  isLoading: select_isLoading
});

export default connect(mapStateToProps, null)(Base);