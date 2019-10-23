import React, { Component } from 'react'
import PropTypes from 'prop-types';

import SelectArrow from '../selectArrow/SelectArrow';

import StyledSelect from './Styled_Select';

class CustomSelect extends Component {
  state = {
    arrow: false
  }
  outsideRef = React.createRef();
  
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };
  
  handleClickOutside = e => {
    const { current } = this.outsideRef;
    const { arrow } = this.state;
    if(current === null) return null;
    if(e.target.className !== 'custom-select' && arrow) this.setState({ arrow: false });
    return null;
  };

  onClick = () => {
    const { arrow } = this.state;
    this.setState({ arrow: !arrow });
  };

  render() {
    const { onChange, arr, value } = this.props;
    const { arrow } = this.state;
    const option = !!!arr 
    ? <option />
    : arr.map(i => <option key={i} value={i}>{i}</option>);
    return (
      <StyledSelect>
        <select
          ref={this.outsideRef}
          onClick={this.onClick}
          className='custom-select'
          onChange={onChange}
        >
          <option>{value}</option>
          {option}
        </select>
        <SelectArrow rotate={arrow} />
      </StyledSelect>
    )
  }
}


CustomSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  arr: PropTypes.array,
  value: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
}

export default CustomSelect;