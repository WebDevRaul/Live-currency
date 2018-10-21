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
      firstData:{},
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
      this.setState({ firstData: nextProps.firstData })
    }
  }

  render() {
    const test = ['test1', 'test2', 'test3'];

    const res = test.map((rez) => <Currency key={rez} test={rez}/>)

    return (
      <div className='liveCurrency'>
        <SearchCurrency />
        {res}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  firstData: state.firstData
});

export default connect(mapStateToProps, { firstCall })(LiveCurrency);