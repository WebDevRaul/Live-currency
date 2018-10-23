import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { submitRate } from '../../redux/actions/submitRateAction';

class SearchCurrency extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      error: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.submitRate(this.state.text);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  onClick() {
    alert('test');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
          />
          <button 
            type='submit'
            onClick={this.onClick}
          >Search</button>
        </form>
      </div>
    )
  }
}
export default connect(null, { submitRate })(SearchCurrency)
