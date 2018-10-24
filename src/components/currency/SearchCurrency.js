import React, { Component } from 'react';
import classnames from 'classnames';

//Redux
import { connect } from 'react-redux';
import { submitRate } from '../../redux/actions/submitRateAction';

//common
import isEmpty from '../common/isEmpty';

//Css
import '../css/SearchCurrency.css';

class SearchCurrency extends Component {
  constructor() {
    super();
    this.state = {
      text: [],
      error: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  };

  onSubmit(e) {
    e.preventDefault();

    const { text } = this.state;

    if(isEmpty(this.state.text)) {
      //do error here
    } else if(text.trim().split(',').lenght !== 0) {
      this.props.submitRate(text)
    } else {
      //do error for comma
    }

    this.setState({ text: [] });
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  onClick() {
    
  }

  render() {
    return (
      <div className='searchCurrency'>
        <form onSubmit={this.onSubmit}>
          <input
            className={classnames('searchInput', {
              'searchInputBorder': this.onClick()
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

export default connect(null, { submitRate })(SearchCurrency)
