import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { set_from } from '../../../../redux/actions/convertor';
import { createStructuredSelector } from 'reselect';
import { select_keys, select_from } from '../../../../redux/selectors/live';

import CustomSelect from '../../../common/select/CustomSelect';
// import CustomInput from '../../../common/input/CustomInput';
import Wrapper from './Wrapper';

class Form extends Component {
  state = {
    from: '',
    error: {}
  }
  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFocus = e => {

  }

  render() {
    const {  from, arr } = this.props;

    return (
      <form noValidate>
        <Wrapper>
          <>
            <CustomSelect name='from' value={from} onChange={e => this.props.set_from(e.target.value)} arr={arr} />
          </>
        </Wrapper>
        {/* <Wrapper>
          <>
            <CustomInput name='input_to' value={input_to} onChange={this.onChange} type='text' error={error.to} onFocus={this.onFocus} />
          </>
        </Wrapper> */}
      </form>
    )
  }
};

Form.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  arr: select_keys,
  from: select_from
});

export default connect(mapStateToProps, { set_from })(Form);