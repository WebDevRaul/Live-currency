import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { get_Set_Currency } from '../../redux/actions/get_Set_Currency';
import { get_Update_Currency } from '../../redux/actions/get_Update_Currency';
import { get_Set_From } from '../../redux/actions/get_Set_From';
import { get_Set_To } from '../../redux/actions/get_Set_To';
import { get_Set_From_Val } from '../../redux/actions/get_Set_FromVal';
import { get_Clear_Error } from '../../redux/actions/commonAction';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

//Css
import '../css/Currency.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromArrow: false,
      toArrow: false,
    };
    
    this.onClick = this.onClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { from } = nextProps.from;
    const { to } = nextProps.to;
    const { fromVal } = nextProps.fromVal;
    const { setCurrency } = nextProps.setCurrency;
    const { updateCurrency } = nextProps.updateCurrency;
    const { errors } = nextProps.errors;

    if( from !== prevState.from || to !== prevState.to || fromVal !== prevState.fromVal || setCurrency !== prevState.setCurrency || updateCurrency !== prevState.updateCurrency || errors !== prevState.errors ) {
      return { from, to, fromVal, setCurrency, updateCurrency, errors: nextProps.errors.errors };
   }
   else return null;
 }

  componentDidMount(prevState, prevProps) {
    const { from, to } = this.state;
    this.props.get_Set_Currency(from, to);
    document.addEventListener("mousedown", this.handleClickOutside);
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { from, to, fromVal, errors } = this.state;
    if ( from !== prevProps.from.from || to !== prevProps.to.to || fromVal !== prevProps.fromVal.fromVal ) { 
      this.props.get_Update_Currency(from, to, fromVal);
    }
    if (!isEmpty(errors)) {
      setTimeout(() => { this.props.get_Clear_Error() }, 2000);
    }
    if (from !== prevProps.from.from || to !== prevProps.to.to) {
      this.props.get_Set_Currency(from, to);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ fromArrow: false, toArrow: false });
    }
  };

  onClick(e) {
    this.setState({ [e.target.name+'Arrow']: !this.state[(`${e.target.name+'Arrow'}`)] })
  }
  
  render() {

    //Error
    const error = this.state.errors.number;

    //Date
    const { today } = this.props.date;
    let date;
    if (!isEmpty(today)) {
      date = today.toString()
    }

    //--------------//--------------//

    const { from, to, setCurrency } = this.state;

    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    let data = Object.keys(selectRate).map(i => selectRate[i]);
    data.sort();
    const option = Object.keys(data).map(i => <option key={i}>{data[i]}</option>);

    //--------------//--------------//

    //setCurrency data back to string
    let placeholder = String(setCurrency);
    let updateCurrency = String(this.state.updateCurrency);

    //--------------//--------------//

    //setCurrency to max 5 decimal
    let maxDecimalNumber = updateCurrency.indexOf('.') + 5;
    let split, decimal, number, finalNumber;
    if (updateCurrency.length > maxDecimalNumber) {
      if (!isEmpty(updateCurrency)) {
        split = updateCurrency.split('.');
      }
      if (!isEmpty(split)) {
        decimal = split.splice(1,1);
        number = split.splice(0,1)
      }
      if (!isEmpty(decimal)) {
        finalNumber = number + '.' + decimal[0].slice(0,5);
        updateCurrency = finalNumber
      }
    }

    //--------------//--------------//

    //Animation btn
    const up = <span className='currencyArrow'><span className='spanFirstUp'></span><span className='spanLastUp'></span></span>;
    const down = <span className='currencyArrow'><span className='spanFirstDown'></span><span className='spanLastDown'></span></span>

    return (
      <div className='currency'>
          <div className='row'>
            <div className='col col-md-5'>
            <div>{date}</div>
            <div className='currency-base'>
              <p>
                <span className='currency-base-number'>1</span>
                <span className='currency-base-state'>{from}</span>
                <span className='currency-base-span'>is</span>
                {placeholder}
                <span className='currency-base-state'>{to}</span>
                </p>
              </div>
            </div>
            <div className='col col-md-7'>
              <form>
                <div className='row'>
                  <div className='col'>
                    <input
                    className='currency-val'
                    name='fromVal'
                    type='text'
                    onChange={(e) => this.props.get_Set_From_Val(e.target.value)}
                    value={this.state.fromVal}
                  />
                    <select
                      ref={this.myRef}
                      className='currency-select'
                      name='from'
                      value={this.state.from}
                      onChange={(e) => this.props.get_Set_From(e.target.value)}
                      onClick={this.onClick}
                  >
                      <option defaultValue={from} />
                      {option}
                    </select>{this.state.fromArrow ? up : down}
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <input
                      className='currency-val'
                      name='toVal'
                      type='text'
                      value={ (!isEmpty(error) ? error : (updateCurrency === '[object Object]') ? placeholder : updateCurrency) }
                      onChange={(e) => {}}
                    />
                    <select
                      ref={this.myRef}
                      className='currency-select'
                      name='to'
                      value={this.state.to}
                      onChange={(e) => this.props.get_Set_To(e.target.value)}
                      onClick={this.onClick}
                    >
                      <option defaultValue={to} />
                      {option}
                    </select>{this.state.toArrow ? up : down}
                  </div>
                </div>
              </form> 
            </div>
          </div> 
      </div>
    )
  }
};

CurrencyConvertor.propTypes = {
  selectRate: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  get_Set_Currency: PropTypes.func.isRequired,
  get_Update_Currency: PropTypes.func.isRequired,
  get_Set_From: PropTypes.func.isRequired,
  get_Set_To: PropTypes.func.isRequired,
  get_Set_From_Val: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
  updateCurrency: PropTypes.object.isRequired,
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
  fromVal: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  selectRate: state.selectRate,
  date: state.date,
  setCurrency: state.setCurrency,
  updateCurrency: state.updateCurrency,
  from: state.from,
  to: state.to,
  fromVal: state.fromVal,
  errors: state.errors
});

export default connect(mapStateToProps, { get_Set_Currency, get_Clear_Error, get_Update_Currency, get_Set_From, get_Set_To, get_Set_From_Val })(CurrencyConvertor);