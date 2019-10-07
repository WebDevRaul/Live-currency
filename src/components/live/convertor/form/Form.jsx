import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_from, set_to } from '../../../../redux/actions/convertor';
import { createStructuredSelector } from 'reselect';
import { select_keys, select_from, select_to, select_value } from '../../../../redux/selectors/live';

import CustomSelect from '../../../common/select/CustomSelect';
import CustomInput from '../../../common/input/CustomInput';
import Wrapper from './Wrapper';

class Form extends Component {
  state = {
    _from: 1,
    _to: undefined,
    value: undefined,
    error: {}
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { value } = nextProps;
    
    if( value !== prevState.value ) {
      return { value };
    }
    else return null;
  }
  
  onChange = e => {
    if(isNaN(e.target.value)) return null;
    this.setState({ [e.target.name]: e.target.value });
  }

  onFocus = e => {

  }

  render() {
    const {  from, to, arr, set_from, set_to } = this.props;
    const { _from, _to, error, value } = this.state;

    return (
      <form noValidate>
        <Wrapper>
          <>
            <CustomInput name='_from' value={_from} onChange={this.onChange} type='text' error={error._from} onFocus={this.onFocus} placeholder={_from}/>
            <CustomSelect name='from' value={from} onChange={e => set_from(e.target.value)} arr={arr} />
          </>
        </Wrapper>
        <Wrapper>
          <>
            <CustomInput name='_to' value={_to} onChange={this.onChange} type='text' error={error.to} onFocus={this.onFocus} placeholder={value}/>
            <CustomSelect name='to' value={to} onChange={e => set_to(e.target.value)} arr={arr} />
          </>
        </Wrapper>
      </form>
    )
  }
};

Form.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
  set_from: PropTypes.func.isRequired,
  set_to: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  arr: select_keys,
  from: select_from,
  to: select_to,
  value: select_value
});

export default connect(mapStateToProps, { set_from, set_to })(Form);