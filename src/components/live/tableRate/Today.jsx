import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date, select_values_today } from '../../../redux/selectors/today';

import Span from '../../common/span/Span';
import Rate from './Rate';

const Today = ({ date, arr }) => {
  if(!!!arr) return null;
  return (
    <>
      <Span text={date} />
      {arr.map(i => <Rate key={i} name={i[0]} value={i[1]} />)}
    </>
  )
}

Today.propTypes = {
  date: PropTypes.string.isRequired,
  arr: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  date: select_date,
  arr: select_values_today
});

export default connect(mapStateToProps, null)(Today);