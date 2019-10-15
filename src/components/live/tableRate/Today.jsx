import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date_today, select_values_today, select_isLoading } from '../../../redux/selectors/rates';

import Span from '../../common/span/Span';
import Rate from './Rate';
import NoData from './NoData';

const Today = ({ date, arr, isLoading }) => {
  if(isLoading) return <>is loading</>;
  return (
    <>
      <Span text={date} />
      <div className='data'>
        {
          !!arr
          ? arr.map(i => <Rate key={i} name={i[0]} value={i[1]} />)
          : <NoData />
        }
      </div>
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