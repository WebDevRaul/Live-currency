import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_date, select_isLoading } from '../../../../redux/selectors/convertor';
import Span from '../../../common/span/Span';
import Loading from '../../../common/loading/Loading';


const Date = ({ date, isLoading }) => (
  <>
    {
      isLoading
      ? <Loading><><p></p></></Loading>
      : <Span text={date} />
    }
  </>
);

Date.propTypes = {
  date: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  date: select_date,
  isLoading: select_isLoading
});

export default connect(mapStateToProps, null)(Date);
