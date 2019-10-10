import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date_lastYear, select_values_lastYear } from '../../../redux/selectors/rates';

import Span from '../../common/span/Span';
import Rate from './Rate';

const LastYear = ({ date, arr }) => {
  if(!!!arr) return null;
  return (
    <>
      <Span text={date} />
      {arr.map(i => <Rate key={i} name={i[0]} value={i[1]} />)}
    </>
  )
}

LastYear.propTypes = {
  date: PropTypes.string.isRequired,
  arr: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  date: select_date_lastYear,
  arr: select_values_lastYear
});

export default connect(mapStateToProps, null)(LastYear);