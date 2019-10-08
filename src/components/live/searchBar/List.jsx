import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_keys } from '../../../redux/selectors/rates'

const List = ({ arr, value }) => {
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
  value: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  arr: select_keys
});

export default connect( mapStateToProps, null )(List);