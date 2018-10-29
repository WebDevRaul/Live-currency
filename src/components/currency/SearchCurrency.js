import React, { Component } from 'react';
import classnames from 'classnames';

//Redux
import { connect } from 'react-redux';
import { setError } from '../../redux/actions/commonAction';
import { getNewRates } from '../../redux/actions/getNewRatesAction';

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
  };

  onSubmit(e) {
    e.preventDefault();

    const { text } = this.state;

    this.props.getNewRates(this.props.base, text)

    this.setState({ text: [] });
  }

  onChange(e) {
    this.setState({ text: e.target.value })
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

export default connect(null, {  setError, getNewRates })(SearchCurrency)
