import React, { Component } from 'react'
import SearchCurrency from './SearchCurrency';
import Currency from './Currency';

//Redux
import { connect } from 'react-redux';
import { firstCall } from '../../redux/actions/firstCallAction';

class LiveCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  render() {
    const obj = this.props.defaultRates.rates;
    const baseRates = Object.keys(obj).map(i => <Currency key={i} name={i} data ={obj[i]}/>);
    const { date } = this.props.defaultRates;
    const { base } = this.props.defaultRates;
    
    return (
      <div className='liveCurrency'>
        <SearchCurrency />
        {baseRates}
        {date} - {base}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  errors: state.errors,
  defaultRates: state.defaultRates,
});

export default connect(mapStateToProps, { firstCall })(LiveCurrency);