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
  }

  componentDidMount() {
      this.props.firstCall();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  render() {

    const  firstData  = this.props.firstData.firstData.rates;

    console.log(firstData);

    return (
      <div className='liveCurrency'>
        <SearchCurrency />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  firstData: state.firstData
});

export default connect(mapStateToProps, { firstCall })(LiveCurrency);