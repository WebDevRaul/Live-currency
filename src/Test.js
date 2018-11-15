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

    // .then(res => {
    //   const date = res.payload.date;
    //   const today = new Date(date).toISOString().slice(0, 10);
    //   const yesterday = ( today => new Date(today.setDate(today.getDate() - 1)) )(new Date(date)).toISOString().slice(0, 10);
    //   axios
    //     .get(`https://api.exchangeratesapi.io/history?start_at=${yesterday}&end_at=${yesterday}&symbols=${newRates}&base=${base}`)
    //     .then(res => dispatch({
    //       type: GET_YESTERDAY_RATE,
    //       payload: res.data.rates
    //     }))
    //     .catch(err => dispatch({
    //       type: GET_ERRORS,
    //       payload: err.response.data
    //     }))
    // })

    // .then(res => {
    //   const date = res.payload.date;
    //   const LastYear = new Date(date).getFullYear() - 1;
    //   const lastYear = ( today => new Date(today.setFullYear(LastYear)) )(new Date(date)).toISOString().slice(0, 10)
    //   axios
    //     .get(`https://api.exchangeratesapi.io/history?start_at=${lastYear}&end_at=${lastYear}&symbols=${newRates}&base=${base}`)
    //     .then(res => dispatch({
    //       type: GET_LAST_YEAR,
    //       payload: res.data.rates
    //     }))
    //     .catch(err => dispatch({
    //       type: GET_ERRORS,
    //       payload: err.response.data
    //     }))
    // })

  // if (this.state.yesterday.length > 0 && this.state.today.length > 0) {
  //   for (let i = 0; i < this.state.today.length; i++) {
  //     const a = this.state.today[i];
  //     const b = this.state.yesterday[i]
  //     if (a > b) {
  //       this.props.get_Arrow_Today('up', i)
  //     } else if (a < b) {
  //       this.props.get_Arrow_Today('down', i)
  //     } else {
  //       this.props.get_Arrow_Today('equal', i)
  //     }
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   let arrowYesterday;
  //   let sort;
  //   let arrowToday;
  //   if (nextProps.rate.today !== this.props.rate.today) {
  //     const { today } = nextProps.rate;
  //     if (!isEmpty(today)) {
  //       sort = Object.keys(today)
  //         .sort()
  //         .reduce((sortObj, key) => ({
  //           ...sortObj, [key]: today[key]
  //         }), {});
  //       arrowToday = Object.keys(sort).map(i => sort[i]);
  //       this.setState({
  //         today: arrowToday
  //       })
  //     }
  //     // this.props.get_Arrow_Today(arrowToday);
  //     // this.props.get_Arrow_Yesterday(arrowYesterday);
  //   }
  //   if (nextProps.rate.yesterday !== this.props.rate.yesterday) {
  //     const { yesterday } = nextProps.rate;
  //     if (!isEmpty(yesterday)) {
  //       sort = Object.keys(yesterday)
  //         .sort()
  //         .reduce((sortObj, key) => ({
  //           ...sortObj, [key]: yesterday[key]
  //         }), {});
  //       arrowYesterday = Object.keys(sort).map(i => yesterday[i]);
  //       this.setState({
  //         yesterday: arrowYesterday
  //       })
  //     }
  //   }
  // }
