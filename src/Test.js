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

    if(text.trim().length > 3) {
      if (text.indexOf(',') > -1) {
        const x = text.trim().split(',')
        console.log(x)
        if (x.map(e => e).length > 3) {
          console.log('second is greater then 3')
        }
      }
      console.log('greater then 3')
    } else {
      console.log('else')
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
