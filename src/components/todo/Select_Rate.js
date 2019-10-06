import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { get_Change_Base } from '../../redux/a/get_Change_Base';
import { get_Rates } from '../../redux/actions/get_Rates';
import { get_New_Rate } from '../../redux/actions/get_New_Rate';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

//Css
import '../css/SelectRate.css';

class SelectRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: false
    }
    
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { newSymbols } = nextProps.newSymbols;
    const { base } = nextProps.base;
    if(base !== prevState.base || newSymbols !== prevState.newSymbols){
      return { base, newSymbols };
   }
   else return null;
 }

  componentDidMount() {
    const { base } = this.state;
    const { date } = this.props;
    const { symbols } = this.props.symbols;
    if (!isEmpty(base) && !isEmpty(date) && !isEmpty(symbols)) {
      this.props.get_Rates(base,date,symbols)
    }
    document.addEventListener("mousedown", this.handleClickOutside);
  }
 
  componentDidUpdate(prevProps, prevState) {
    const { base } = this.state;
    const { symbols } = this.props.symbols;
    const { date } = this.props;
    const { newSymbols } = this.state;

    if ( base !== prevProps.base.base) {
      this.props.get_Rates(base, date, symbols);
      if (!isEmpty(newSymbols)) {
        this.props.get_New_Rate(base, date, newSymbols)
      }
    }
    if (prevProps.newSymbols.newSymbols !== newSymbols) {
      this.props.get_New_Rate(base, date, newSymbols)
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ arrow: false })
    }
  };

  onChange(e) {
    this.props.get_Change_Base(e.target.value);
  };
  
  onClick() {
    this.setState({ arrow: !this.state.arrow })
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
    const option = Object.keys(data).map(i => <option key={i} value={data[i]}>{data[i]}</option>);

    //--------------//--------------//

    //Animation btn
    const up = <span className='currencyArrow'><span className='spanFirstUp'></span><span className='spanLastUp'></span></span>;
    const down = <span className='currencyArrow'><span className='spanFirstDown'></span><span className='spanLastDown'></span></span>

    return (
      <div className='selectRate'>
        <form >
          Change base Rate: 
          <select
            ref={this.myRef}
            className='selectRateBase'
            onChange={this.onChange}
            onClick={this.onClick}
          >
            <option 
              defaultValue={base}>
              {base}
            </option>
            {option}
          </select>{this.state.arrow ? up : down}
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
  newSymbols: PropTypes.object.isRequired,
  symbols: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  base: state.base,
  date: state.date,
  selectRate: state.selectRate,
  newSymbols: state.newSymbols,
  symbols: state.symbols,
});

export default connect(mapStateToProps, { get_Change_Base, get_Rates, get_New_Rate })(SelectRate);

