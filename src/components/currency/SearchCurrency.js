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
    };
    if (text.length > 3 && !text.includes(',')) {
      this.props.setError({ greaterInput: 'For multiple value please insert " , "' })
    };
     if (text.length > 3 && text.includes(',')) {
      const split = text.split(',');
      const value = split.map(i => i.trim());
      let element;
      for (let i = 0; i < value.length; i++) {
        element = value[i];
      }
      if (element.length > 3) {
        this.props.setError({ test: `${element} is not a valid value` })
      }
    };

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
    } else if (!isEmpty(text)) {
      this.props.submitRate(text)
      console.log(text)
    } else {
      return null;
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
      <div className='row'>
        <div className='col'>
          <div className='searchCurrency'>
            <form onSubmit={this.onSubmit}>
              <input
                className='searchInput'
                type='text'
                name='text'
                value={this.state.text}
                onChange={this.onChange}
              />
              {/* <span className='searchIcon'
                onClick={this.onClick}
              ><i className="fas fa-search"></i></span> */}
              <span
                className='searchInfo'
              >i</span>
              <button 
                className='searchButton'
                type='submit'
                >Search</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { submitRate, setError })(SearchCurrency)
