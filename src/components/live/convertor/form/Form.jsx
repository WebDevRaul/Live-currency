import React, { Component } from 'react'
import Input from '../../../common/input/Input'

class Form extends Component {
  state = {
    from: '',
    to: '',
    error: {}
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { from, to, error } = this.state;
    return (
      <form noValidate>
        <Input name='from' value={from} onChange={this.onChange} type='text' error={error.from} />
        <Input name='to' value={to} onChange={this.onChange} type='text' error={error.to} />
      </form>
    )
  }
}

export default Form;