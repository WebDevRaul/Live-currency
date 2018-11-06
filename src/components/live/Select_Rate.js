import React, { Component } from 'react'

class Select_Rate extends Component {
  constructor() {
    super();
    this.state = {
      base: 'GBP'
    }
  }

  componentDidMount() {
    // this.props.getSelect_Rate();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Change base Rate: 
            <select
              value= {this.state.base}
              onChange={this.onChange}>
              <option 
                defaultValue='GBP'>
                GBP
              </option>
              .....
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

export default Select_Rate;

