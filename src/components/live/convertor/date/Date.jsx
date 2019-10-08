import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date } from '../../../../redux/selectors/convertor';
import Span from '../../../common/span/Span';


const Date = ({ date }) => (
  <Span text={date} />
);

Date.propTypes = {
  date: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  date: select_date
});

export default connect(mapStateToProps, null)(Date);
