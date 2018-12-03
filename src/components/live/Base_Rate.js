import React, { Component } from 'react';

//Common
import Spinner from '../common/Spinner';

class BaseRate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  static getDerivedStateFromProps(nextProps, prevState){
    const { loading } = nextProps;

    if( loading !== prevState.loading ) {
      return { loading };
   }
   else return null;
 }
  render() {
    
    let rateContent;
    if (this.state.loading !== true ) {
      rateContent = <tr><td><Spinner /></td></tr>
    } else {
      rateContent = 
        <tr>
          <td>{this.props.baseRateToday}</td>
          <td>{this.props.baseRateYesterday}</td>
          <td>{this.props.baseRateLastYear}</td>
        </tr>
    };

    return (
      rateContent
    )
  }
};

export default BaseRate;
