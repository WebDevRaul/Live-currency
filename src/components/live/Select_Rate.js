import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { get_Change_Base } from '../../redux/actions/get_Change_Base';

//IsEmpty from common
import isEmpty from '../common/isEmpty';

class SelectRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ base: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { base } = this.state;
    this.props.get_Change_Base(base);
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
    const option = Object.keys(data).map(i => <option key={i}>{data[i]}</option>);

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
  base: state.base,
  selectRate: state.selectRate
});

export default connect(mapStateToProps, { get_Change_Base })(SelectRate);

