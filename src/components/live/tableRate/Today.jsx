import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date_today, select_values_today, select_isLoading } from '../../../redux/selectors/rates';

import Span from '../../common/span/Span';
import Rate from './Rate';

const Today = ({ date, arr, isLoading }) => {
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

Today.propTypes = {
  date: PropTypes.string.isRequired,
  arr: PropTypes.array,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  date: select_date_today,
  arr: select_values_today,
  isLoading: select_isLoading
});

export default connect(mapStateToProps, null)(Today);