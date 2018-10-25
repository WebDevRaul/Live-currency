import React, { Component } from 'react';
import classnames from 'classnames';

//Redux
import { connect } from 'react-redux';
import { submitRate } from '../../redux/actions/submitRateAction';
import { setError } from '../../redux/actions/commonAction';

//common
import isEmpty from '../common/isEmpty';

//Css
import '../css/SearchCurrency.css';

class SearchCurrency extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      input: false,
      error: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  };

  onSubmit(e) {
    e.preventDefault();

    const { text } = this.state;

    if (text.length > 1) {
      //do error .. but not working yet
    }

    if(isEmpty(text)) {
      setError({ searchBar: 'Name your error here' })
    } else {
      this.props.submitRate(text)
    }

    this.setState({ text: [] });
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  onClick() {
    this.setState(prevState => ({ input: !prevState.input }))
  }

  render() {
    return (
      <div className='searchCurrency'>
        <form onSubmit={this.onSubmit}>
          <input
            className={classnames('searchInput', {
              'searchInputBorder': this.state.input
            })}
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
          />
          <span className='searchIcon'
            onClick={this.onClick}
          ><i class="fas fa-search"></i></span>
          <span>i</span> {/* this is for info */}
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { submitRate, setError })(SearchCurrency)
