import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add_rate } from '../../../redux/actions/rates';
import { createStructuredSelector } from 'reselect';
import { select_keys } from '../../../redux/selectors/rates';

import CustomButton from '../../common/button/CustomButton';
import List from './List';
import Icon from './Icon';
import validateForm from './utils/validate';

import StyledSearchBar from './Styled_SearchBar';

class SearchBar extends Component {
  state = {
    value: '',
    click: false,
    error: ''
  }

  onChange = e => this.setState({ value: e.target.value })

  onSubmit = () => {
    const { value } = this.state;
    const { arr } = this.props;
    const data  = String(value).toUpperCase();

    this.setState({ click: true });
    this.timer = setTimeout(() => this.setState({ click: false }), 300);

    // Validate the value
    const { errors, isValid } = validateForm({ data, arr });
    if(!isValid) return this.setState({ value: '', error: errors });

    // Submit the form
    this.props.add_rate(data);
    this.setState({ value: '' });
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
            {console.log(error)}
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
  add_rate: PropTypes.func.isRequired,
  arr: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  arr: select_keys
})

export default connect( mapStateToProps, { add_rate } )(SearchBar);