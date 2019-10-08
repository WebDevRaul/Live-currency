import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../common/button/CustomButton';
import StyledSearchInput from './Styled_SearchInput';

class SearchInput extends Component {
  state = {
    value: '',
    click: false,
    error: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onSubmit = () => {
    this.setState({ click: true });
    this.timer = setTimeout(() => this.setState({ click: false }), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { value, error, click } = this.state;
    return (
      <StyledSearchInput click={click}>
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
        </form>
        <CustomButton value='search' isClass='submit' onClick={this.onSubmit} isLoading={false} />
      </StyledSearchInput>
    )
  }
};

SearchInput.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  
});

export default connect( mapStateToProps, {  } )(SearchInput);