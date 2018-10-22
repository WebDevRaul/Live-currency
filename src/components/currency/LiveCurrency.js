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
    const obj = this.props.ratesData.ratesData;
    const baseRates = Object.keys(obj).map(i => <Currency key={i} name={i} data ={obj[i]}/>);
    const { data } = this.props.ratesData;
    
    return (
      <div className='liveCurrency'>
        <SearchCurrency />
        {data.date} base: {data.base}
        {baseRates}
        
      </div>
    )
  }
};

const mapStateToProps = state => ({
  errors: state.errors,
  ratesData: state.ratesData,
  data: state.data,
  rate: state.rate
});

export default connect(mapStateToProps, { firstCall })(LiveCurrency);