import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../common/button/CustomButton';
import List from './List';
import Icon from './Icon';

import StyledSearchBar from './Styled_SearchBar';


class SearchBar extends Component {
  state = {
    value: '',
    click: false,
    error: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onSubmit = () => {
    this.setState({ click: true });
    this.timer = setTimeout(() => this.setState({ click: false }), 300);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { value, error, click } = this.state;
    return (
      <StyledSearchBar click={click}>
        <div className='search-bar'>
          <form noValidate>
            <input 
              className='search-input'
              autoComplete='off'
              type='search'
              list='list'
              value={value}
              onChange={this.onChange}
              error = {error}
            />
            <Icon />
            <List value={value} />
          </form>
          <CustomButton value='search' isClass='submit' onClick={this.onSubmit} isLoading={false} />
        </div>
      </StyledSearchBar>
    )
  }
};

SearchBar.propTypes = {

};

const mapStateToProps = createStructuredSelector({

});

export default connect( mapStateToProps, {  } )(SearchBar);