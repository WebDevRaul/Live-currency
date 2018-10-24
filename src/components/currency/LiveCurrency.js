import React, { Component } from 'react'
import SearchCurrency from './SearchCurrency';
import Currency from './Currency';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { firstCall } from '../../redux/actions/firstCallAction';

class LiveCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestRate: '',
      errors: {}
    }
  };

  componentDidMount() {
      this.props.firstCall();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
    if (nextProps.requestRate) {
      this.setState({ requestRate: nextProps.requestRate.rate })
    }
  };

  render() {

    const obj = this.props.defaultRates.rates;
    const baseRates = Object.keys(obj).map(i => <Currency key={i} name={i} data ={obj[i]}/>);

    const { date } = this.props.defaultRates;
    const { base } = this.props.defaultRates;

    const { requestRate } = this.state;
    const rate = Object.keys(requestRate).map(i => <p key={i}>{i} - {requestRate[i]}</p>);
    
    return (
      <div className='liveCurrency'>
        <SearchCurrency />
        {baseRates}
        {date} - {base}
        {rate}
      </div>
    )
  }
};

LiveCurrency.propTypes = {
  errors: PropTypes.object.isRequired,
  defaultRates: PropTypes.object.isRequired,
  requestRate: PropTypes.object.isRequired,
  firstCall: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  defaultRates: state.defaultRates,
  requestRate: state.requestRate
});

export default connect(mapStateToProps, { firstCall })(LiveCurrency);

//fix on click w/o val return all rates