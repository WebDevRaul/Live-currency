import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { get_Change_Base } from '../../redux/actions/get_Change_Base';
import { get_Rates } from '../../redux/actions/get_Rates';
import { get_New_Rate } from '../../redux/actions/get_New_Rate';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

class SelectRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.base.base !== this.props.base.base) {
      const { base } = nextProps.base;
      const { symbols } = this.props.symbols;
      const { date } = this.props;
      const { newSymbols } = nextProps.newSymbols;
      this.props.get_Rates(base, date, symbols);
      if (!isEmpty(newSymbols)) {
        this.props.get_New_Rate(base, date, newSymbols)
      }
    }

    if (nextProps.newSymbols.newSymbols !== this.props.newSymbols.newSymbols) {
      const { base } = this.props.base
      const { date } = this.props;
      const { newSymbols } = nextProps.newSymbols;
      this.props.get_New_Rate(base, date, newSymbols)
    }
  }

  onChange(e) {
    this.setState({ base: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { base } = this.state;
    this.props.get_Change_Base(base);
  }

  render() {
    let base;
    if (!isEmpty(this.props.base.base)) {
      base = this.props.base.base
    }
    
    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    let data = Object.keys(selectRate).map(i => selectRate[i]);
    data.sort();
    const option = Object.keys(data).map(i => <option key={i}>{data[i]}</option>);

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Change base Rate: 
            <select
              value= {this.state.base}
              onChange={this.onChange}>
              <option 
                defaultValue={base}>
                {base}
              </option>
              {option}
            </select>
          </label>
          <button 
            className='live' 
            type='submit' 
            value='Submit'>
            submit
          </button>
        </form>
      </div>
    )
  }
};

SelectRate.propTypes = {
  get_Change_Base: PropTypes.func.isRequired,
  get_Rates: PropTypes.func.isRequired,
  get_New_Rate: PropTypes.func.isRequired,
  base: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  selectRate: PropTypes.object.isRequired,
  symbols: PropTypes.object.isRequired,
  newSymbols: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  base: state.base,
  date: state.date,
  selectRate: state.selectRate,
  symbols: state.symbols,
  newSymbols: state.newSymbols
});

export default connect(mapStateToProps, { get_Change_Base, get_Rates, get_New_Rate })(SelectRate);

