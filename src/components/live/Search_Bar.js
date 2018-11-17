import React, { Component } from 'react';
import classnames from 'classnames';

//Redux
import { connect } from 'react-redux';
import { get_New_Symbols } from '../../redux/actions/get_New_Symbols';
import { get_Clear_Error } from '../../redux/actions/commonAction';

//Common
import isEmpty from '../common/isEmpty';

//Css
import '../css/SearchCurrency.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      click: false,
      errors: {},
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  };

  onMouseDown() {
    this.setState({
      click: !this.state.click
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    this.props.get_New_Symbols(text);
    this.setState({
      text: '',
    })
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors.errors });
    }
  };

  render() {
    const { errors, click } = this.state;

    return (
      <div>
        <form className='searchCurrency' onSubmit={this.onSubmit}>
          <input
            className={classnames('searchInput', {'searchInputError' : errors.searchBar})}
            placeholder={click ? '' : errors.searchBar}
            value={this.state.text}
            type='text'
            name='text'
            onChange={this.onChange}
            error = {errors}
          />
          <span className='searchInfo'>i</span>
          <button
            onMouseDown={this.onMouseDown} 
            onMouseUp={this.onMouseDown}
            className={classnames('searchButton', { 'onClickSearchButton' : click })}
            type='submit'
            >Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols,
  errors: state.errors
});

export default connect(mapStateToProps, { get_New_Symbols, get_Clear_Error })(SearchBar);