import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_today } from '../../../redux/selectors/table';

import Span from '../../common/span/Span';

const Today = ({ date }) => {
  return (
    <>
      {/* <Span text={date} /> */}
    </>
  )
}

Today.propTypes = {
  // date: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  date: select_today
});

export default connect(mapStateToProps, null)(Today);