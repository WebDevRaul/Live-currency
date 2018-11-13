import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { get_New_Symbols } from '../../redux/actions/get_New_Symbols';

//Css
import '../css/SearchCurrency.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    this.props.get_New_Symbols(text);
    this.setState({
      text: ''
    })
  }

  render() {

    const { errors } = this.props.errors

    return (
      <form onSubmit={this.onSubmit}>
        <input 
          className='searchInput'
          value={this.state.text}
          type='text'
          name='text'
          onChange={this.onChange}
          error = {errors}
        />
        <span className='searchInfo'>i</span>
        <button className='searchButton' type='submit'>Search</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols,
  errors: state.errors
});

export default connect(mapStateToProps, { get_New_Symbols })(SearchBar);