import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date } from '../../../redux/selectors/convertor';
import extractDate from './utils/extractDate';

import StyledNoData from './Styled_NoData';

const NoData = ({ date }) => {
  const arrDate = extractDate(date);
  const length = arrDate.length;
  const data = arrDate.map((i, index) => <span key={index}>" {i} "</span>)
  return (
    <StyledNoData>
      <div className='no-data'>
        <p>No information for date{length > 1 ? 's' : null}:</p>
        <p>{data}</p>
      </div>
    </StyledNoData>
  )
}

NoData.propTypes = {
  date: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  date: select_date
});

export default connect( mapStateToProps, null)(NoData);