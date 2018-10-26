import React, { Component } from 'react'

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      input: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e) {
    this.setState({ text: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();

    const { text } = this.state;

    if (text.length === 0) {
      console.log('no value')
    }

    if (text.length > 3 && !text.includes(',')) {
      console.log('greater then 3 and no comma')
    }

    if (text.length > 3 && text.includes(',')) {
      text.trim();
      console.log(text)
    }
  } 

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type='text'
            value={this.state.text}
            onChange={this.onChange}
          />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}
