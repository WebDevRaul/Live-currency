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
    text.trim();

    if(text.length === 0) {
      console.log('no value')
    } else if (text.length > 3 && !text.includes(',')) {
      console.log('greater then 3 and no comma')
    } else if (text.length > 3 && text.includes(',')) {
      const x = text.split(',');
      const res = x.map(res => res.trim());
      console.log(res)
      let element;
      for (let i = 0; i < res.length; i++) {
        element = res[i];
        console.log(element)
      }
      if (element.length > 3) {
        console.log(`${element} is not a valid value.`)
      }
    } else if (text.length > 0) {
      console.log('all passes')
    }
  } 


  // if (isEmpty(text)) {
  //   this.props.setError({ emptyInput: 'Please insert a value' })
  // } else if (text.length > 3 && !text.includes(',')) {
  //   this.props.setError({ greaterInput: 'For multiple value please insert " , "' })
  // } else if (text.length > 3 && text.includes(',')) {
  //   const split = text.split(',');
  //   const value = split.map(i => i.trim());
  //   let element;
  //   for (let i = 0; i < value.length; i++) {
  //     element = value[i];
  //   }
  //   if (element.length > 3) {
  //     this.props.setError({ test: `${element} is not a valid value` })
  //   }
  // } else if (!isEmpty(text)) {
  //   this.props.submitRate(text)
  //   console.log(text)
  // } else {
  //   return null;
  // }

  // if (isEmpty(text)) {
  //   this.props.setError({ emptyInput: 'Please insert a value' })
  // };
  // if (text.length > 3 && !text.includes(',')) {
  //   this.props.setError({ greaterInput: 'For multiple value please insert " , "' })
  // };
  //  if (text.length > 3 && text.includes(',')) {
  //   const split = text.split(',');
  //   const value = split.map(i => i.trim());
  //   let element;
  //   for (let i = 0; i < value.length; i++) {
  //     element = value[i];
  //   }
  //   if (element.length > 3) {
  //     this.props.setError({ test: `${element} is not a valid value` })
  //   }
  // };


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
