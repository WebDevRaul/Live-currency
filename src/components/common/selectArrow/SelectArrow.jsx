import React, { Component } from 'react';


import StyledSelectArrow from './Styled_SelectArrow';

class SelectArrow extends Component {
  state = {
    rotate: false
  }

  onClick = () => {
    const { rotate } = this.state;
    this.setState({ rotate: !rotate })
  }
  render() {
    const { rotate } = this.state;
    return (
      <StyledSelectArrow rotate={rotate}>
        <div className='arrow' onClick={this.onClick}>
          <span className='left-up'></span>
          <span className='right-up'></span>
        </div>
      </StyledSelectArrow>
    )
  }
}

export default SelectArrow;