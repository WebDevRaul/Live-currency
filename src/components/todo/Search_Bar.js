import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

//Components
import ParentModal from './Parent_Modal';

//Redux
import { connect } from 'react-redux';
import { get_New_Symbols } from '../../redux/actions/get_New_Symbols';
import { setError } from '../../redux/actions/commonAction';

//Common
import isEmpty from '../common/isEmpty';
import { country } from '../common/country';

//Css
import '../css/SearchCurrency.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      click: false,
      modal: false,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onModal = this.onModal.bind(this);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { errors } = nextProps.errors
    if( errors !== prevState.errors ) {
      return { 
        errors: nextProps.errors.errors,
      };
    }
   else return null;
  };

  onChange(e) { this.setState({ text: e.target.value }); };

  onSearchButton = () => { 
    this.setState({ click: true });
    this.timer = setTimeout(()=> { this.setState({ click: false }) }, 400);
   }

  onSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    const { selectRate } = this.props.selectRate;

    //Check for invalid Val
    let arr = [];
    if (!isEmpty(selectRate)) {
      for (let i = 0; i < selectRate.length; i++) {
        const element = selectRate[i];
        arr.push({ id: i, name: element })
      }
    };
    const search = text => data => data.name.toUpperCase().startsWith(text.toUpperCase()) || !text;
    const list = arr.filter(search(text)).map(i => i);
    if (!isEmpty(list)) {
      this.props.get_New_Symbols(text);
    } else {
      this.props.setError({ searchBar: 'Enter a valid value!' })
    }

    //Clear text Val
    this.setState({
      text: '',
    })
  };

  onModal() {
    this.setState({
      modal: !this.state.modal
    });
  };

  
  render() {

    const { selectRate } = this.props.selectRate;
    const { errors, click, text, modal } = this.state;

    //Filter Rate(s)
    let arr = [];
    if (!isEmpty(selectRate)) {
      for (let i = 0; i < selectRate.length; i++) {
        const element = selectRate[i];
        arr.push({ id: i, name: element })
      }
    };
    const search = text => data => data.name.toUpperCase().startsWith(text.toUpperCase()) || !text;
    const list = arr.filter(search(text)).map(i => <option key={i.name}>{i.name}</option>);

    //--------------//--------------//

    //Add manual country name(s)

    //Modal
    let flagObj = [];
    if (!isEmpty(selectRate)) {
      for (let i = 0; i < selectRate.length; i++) {
        const element = selectRate[i];
        const data = country[i]
        flagObj.push({ id: i, name: element, country: data.title, code: data.code, currency: data.currency })
      }
    };

    return (
      <div className='search-Div'>
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
            {text.length !== 0 ? list : null }
          </datalist>
          <span 
            className='searchInfo'
            onClick={this.onModal}
          ><i className="fas fa-info"></i></span>
          <button
            onClick={this.onSearchButton}
            className={classnames('searchButton', { 'searchButtonM onClickSearchButton' : click })}
            type='submit'
            >Search</button>
        </form>
        {modal ? <ParentModal flagObj={flagObj} toClose={this.onModal}/> : null}
      </div>
    )
  }
};
 
SearchBar.propTypes = {
  get_New_Symbols: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  selectRate: PropTypes.object.isRequired,
  newSymbols: PropTypes.object.isRequired,
  base: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  selectRate: state.selectRate,
  base: state.base,
  date: state.date,
  newSymbols: state.newSymbols
});

export default connect(mapStateToProps, { get_New_Symbols, setError })(SearchBar);