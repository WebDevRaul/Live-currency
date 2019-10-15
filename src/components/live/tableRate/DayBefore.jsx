import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date_dayBefore, select_values_dayBefore, select_isLoading } from '../../../redux/selectors/rates';

import Span from '../../common/span/Span';
import Rate from './Rate';

const DayBefore = ({ date, arr, isLoading }) => {
  if(isLoading) return <>is loading</>;
  return (
    <>
      <Span text={date} />
      {
        !!arr
        ? arr.map(i => <Rate key={i} name={i[0]} value={i[1]} />)
        : <p>no data</p>
      }
    </>
  )
}

DayBefore.propTypes = {
  date: PropTypes.string.isRequired,
  arr: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  date: select_date_dayBefore,
  arr: select_values_dayBefore,
  isLoading: select_isLoading
});

export default connect(mapStateToProps, null)(DayBefore);