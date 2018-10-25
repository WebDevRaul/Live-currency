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
      error: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  };

  onSubmit(e) {
    e.preventDefault();

    const { text } = this.state;
    const { setError } = this.props;

    if(isEmpty(this.state.text)) {
      this.props.setError({ searchBar: 'Name your error here' })
    };

    if (text.indexOf(',') !== -1) {
      this.props.submitRate(text)
    };

    if (text.splice) {
      setError({ multiData: 'Name your error here, (comma)' })
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

export default connect(null, { submitRate, setError })(SearchCurrency)
