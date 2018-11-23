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
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps.base.base, 'nextprops first');
    console.log(prevState.base, 'prevtate first')
    if(nextProps.base !== prevState.base){
      return { base: prevState.base };
   }
   else return null;
 }
 
 componentDidUpdate(prevProps, prevState) {
  const { base } = this.props.base;
  const { symbols } = this.props.symbols;
  const { date } = this.props;

  if(prevState.base!==this.state.base){
    const { base } = this.state;
    this.props.get_Change_Base(base);
  }
  if (prevProps.base.base !== prevState.base) {
    if (!isEmpty(base) && !isEmpty(symbols) && !isEmpty(date)) {
      this.props.get_Rates(base, date, symbols);
    }
  }
}

  onChange(e) {
    this.setState({ base: e.target.value });
  };

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
        <form>
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
}

const mapStateToProps = state => ({
  base: state.base,
  date: state.date,
  selectRate: state.selectRate,
  symbols: state.symbols,
});

export default connect(mapStateToProps, { get_Change_Base, get_Rates, get_New_Rate })(SelectRate);

