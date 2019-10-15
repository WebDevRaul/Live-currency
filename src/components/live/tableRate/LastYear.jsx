import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date_lastYear, select_values_lastYear, select_isLoading_lastYear } from '../../../redux/selectors/rates';

import Span from '../../common/span/Span';
import Rate from './Rate';
import NoData from './NoData';

const LastYear = ({ date, arr, isLoading }) => {
  if(isLoading) return <>is loading</>;
  return (
    <>
      <Span text={date} />
      {
        !!arr
        ? arr.map(i => <Rate key={i} name={i[0]} value={i[1]} />)
        : <NoData />
      }
    </>
  )
}

LastYear.propTypes = {
  date: PropTypes.string.isRequired,
  arr: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  date: select_date_lastYear,
  arr: select_values_lastYear,
  isLoading: select_isLoading_lastYear
});

export default connect(mapStateToProps, null)(LastYear);