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

    if (isEmpty(text)) {
      this.props.setError({ emptyInput: 'Please insert a value' })
    } else if (text.length > 3 && !text.includes(',')) {
      this.props.setError({ greaterInput: 'For multiple value please insert " , "' })
    } else if (text.length > 3 && text.includes(',')) {
      const split = text.split(',');
      const value = split.map(i => i.trim());
      let element;
      for (let i = 0; i < value.length; i++) {
        element = value[i];
      }
      if (element.length > 3) {
        this.props.setError({ test: `${element} is not a valid value` })
      }
    } else {
      console.log(text)
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
          ><i className="fas fa-search"></i></span>
          <span>i</span> {/* this is for info */}
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { submitRate, setError })(SearchCurrency)
