import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InfoModal from './Info_Modal';

//Redux
import { connect } from 'react-redux';
import { get_New_Symbols } from '../../redux/actions/get_New_Symbols';

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
      errors: {},
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onModal = this.onModal.bind(this);
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

  onModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

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
            {text.length !== 0 ? list : null }
          </datalist>
          <span 
            className='searchInfo'
            onClick={this.onModal}
          >i</span>
          <button
            onMouseDown={this.onMouseDown} 
            onMouseUp={this.onMouseDown}
            className={classnames('searchButton', { 'onClickSearchButton' : click })}
            type='submit'
            >Search</button>
        </form>
        {modal ? <InfoModal
          flagObj={flagObj}
          onClose={this.onModal}
         /> : null}
      </div>
    )
  }
};
 
SearchBar.propTypes = {
  get_New_Symbols: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  selectRate: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  errors: state.errors,
  selectRate: state.selectRate
});

export default connect(mapStateToProps, { get_New_Symbols })(SearchBar);