import React, { Component } from 'react';

class InfoText extends Component {
  state = {
    text: 'This site is an exercise. The data displayed here is not to be considered a model of reference.',
    index: 0,
    lastIndex: 1,
    data: ''
  };

  componentDidMount() {
    // start interval
    this.interval = setInterval(() => this.timer(), 100);
  };

  componentWillUnmount() {
    // clear interval
    clearInterval(this.interval);
  };

  timer = () => {
    const { text, index, lastIndex } = this.state;
    if (lastIndex !== text.length) {
      setTimeout(() => this.setState({ ...this.state, lastIndex: lastIndex + 1, data: text.slice(index, lastIndex) }), 0);
    } else {
      this.setState({ ...this.state, lastIndex: 1 })
    }
  };

  render() {
    const { text, data, index } = this.state;
    const style = {'transform': `translateX(-${index*(100/data.length)}%)`, 'transition': '0.1s'};

    return (
      <div className='info' style={style} >
        <div className='data'>
          { text }
        </div>
      </div>
    )
  }
}

export default InfoText;