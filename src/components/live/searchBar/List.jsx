import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_keys, select_isLoading } from '../../../redux/selectors/convertor';

const List = ({ arr, value, isLoading }) => {
  if(isLoading) return null;
  const search = value => text => text.toUpperCase().startsWith(value.toUpperCase()) || !value;
  const list = arr.filter(search(value)).map(i => <option key={i}>{i}</option>);
  return (
    <datalist id='list'>
      { list }
    </datalist>
  )
}

List.propTypes = {
  arr: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  arr: select_keys,
  isLoading: select_isLoading
});

export default connect( mapStateToProps, null )(List);