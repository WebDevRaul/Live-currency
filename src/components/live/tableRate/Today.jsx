import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date_today, select_values_today } from '../../../redux/selectors/rates';

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
  date: select_date_today,
  arr: select_values_today
});

export default connect(mapStateToProps, null)(Today);