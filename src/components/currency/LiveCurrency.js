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
      firstData: {},
      errors: {}
    }
  }

  componentDidMount() {
      this.props.firstCall();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
    if (nextProps.firstData) {
      this.setState({ firstData: nextProps.firstData.firstData }) // here was the problem
    }
  }

  render() {
    const { firstData } = this.props.firstData
    const baseRates = Object.keys(firstData).map(i => <Currency key={i} name={i} data ={firstData[i]}/>)
    
    return (
      <div className='liveCurrency'>
        <SearchCurrency />
        {baseRates}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  firstData: state.firstData
});

export default connect(mapStateToProps, { firstCall })(LiveCurrency);