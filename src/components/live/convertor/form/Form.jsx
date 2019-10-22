import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_from_base, set_to_base } from '../../../../redux/actions/convertor';
import { createStructuredSelector } from 'reselect';
import { select_keys, select_C_from_base, select_to_base, select_value } from '../../../../redux/selectors/convertor';
import { toFixed4Decimals } from './utils/helper';

import CustomSelect from '../../../common/select/CustomSelect';
import CustomInput from '../../../common/input/CustomInput';
import Wrapper from './Wrapper';
import SelectArrow from '../../../common/selectArrow/SelectArrow';

class Form extends Component {
  state = {
    arrow_one: false,
    arrow_two: false,
    from: '1',
    to: '',
    error: {}
  };

  static getDerivedStateFromProps(nextProps, prevState){
    const { value, from_base, to_base } = nextProps;
    if( value !== prevState.value || from_base !== prevState.from_base || to_base !== prevState.to_base ) return { value, from_base, to_base };
    else return null;
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  };
  
  onChange = e => {
    if(e.target.value.indexOf(' ') >= 0) return null;
    if(isNaN(e.target.value)) return null;
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = () => {

  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

  render() {
    const { arr, set_from_base, set_to_base } = this.props;
    const { from, error, value, arrow_one, arrow_two, from_base, to_base } = this.state;
    const resultToFix = toFixed4Decimals({ value, multiply: from });
    const result = !!resultToFix ? 'undefined' : resultToFix;
    
    return (
      <form noValidate>
        <Wrapper>
          <>
            <CustomInput name='from' value={from} onChange={this.onChange} error={error.from} />
            <CustomSelect name='from_base' onClick={this.onClick} value={from_base} onChange={e => set_from_base(e.target.value)} arr={arr} />
            <SelectArrow rotate={arrow_one} />
          </>
        </Wrapper>
        <Wrapper>
          <>
            <CustomInput name='to' value={result} onChange={this.onChange} error={error.to} />
            <CustomSelect name='to_base' onClick={this.onClick} value={to_base} onChange={e => set_to_base(e.target.value)} arr={arr} />
            <SelectArrow rotate={arrow_two} />
          </>
        </Wrapper>
      </form>
    )
  }
};

Form.propTypes = {
  from_base: PropTypes.string.isRequired,
  to_base: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  set_from_base: PropTypes.func.isRequired,
  set_to_base: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  from_base: select_C_from_base,
  to_base: select_to_base,
  arr: select_keys,
  value: select_value
});

export default connect(mapStateToProps, { set_from_base, set_to_base })(Form);