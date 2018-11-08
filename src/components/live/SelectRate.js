import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { getSelect_Rate } from '../../redux/actions/getSelect_Rate';
import { getBase } from '../../redux/actions/getBase';

class SelectRate extends Component {
  constructor() {
    super();
    this.state = {
      base: 'GBP',

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getSelect_Rate();
  };

  onChange(e) {
    this.setState({ base: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { base } = this.state;
    this.props.getBase(base);
  }

  render() {

    const { base } = this.state;
    
    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    const option = Object.keys(selectRate).map(i => <option key={i}>{selectRate[i]}</option>)

    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
          <button 
            className='live' 
            type='submit' 
            value='Submit'>
            submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectRate: state.selectRate
});

export default connect(mapStateToProps, { getSelect_Rate, getBase })(SelectRate);

