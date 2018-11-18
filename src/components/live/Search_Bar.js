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
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors.errors });
    }
  };

  onChange(e) {
    this.setState({
      text: e.target.value
    });
    
  };

  search(a) {
    return function(b) {
      
    }
  }

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

  render() {
    const { selectRate } = this.props.selectRate;
    const { errors, click } = this.state;

    //Filter Rate(s)
    let arr = [];
    if (!isEmpty(selectRate)) {
      for (let i = 0; i < selectRate.length; i++) {
        const element = selectRate[i];
        arr.push({ id: i, name: element })
      }
    }

    const list = arr.filter(search(this.state.text)).map(i => <option key={i.name}>{i.name}</option>)

    return (
      <div>
        <form className='searchCurrency' onSubmit={this.onSubmit}>
          <input
            className={classnames('searchInput', {'searchInputError' : errors.searchBar})}
            placeholder={click ? '' : errors.searchBar}
            autoComplete='off'
            type='search'
            list='list'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
            error = {errors}
          />
          <datalist id='list'>
            {list}
          </datalist>
          <span 
            className='searchInfo'
          >i</span>
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
  errors: state.errors,
  selectRate: state.selectRate
});

export default connect(mapStateToProps, { get_New_Symbols, get_Clear_Error })(SearchBar);

function search(a) {
  return function(b) {
    return b.name.toUpperCase().includes(a.toUpperCase()) || !a;
  }
}