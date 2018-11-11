import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//Css
import '../css/SearchCurrency.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          className='searchInput'
          value={this.state.text}
          type='text'
          name='text'
          onChange={this.onChange}
        />
        <span className='searchInfo'>i</span>
        <button className='searchButton' type='submit'>Search</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(SearchBar);