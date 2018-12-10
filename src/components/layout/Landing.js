import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Css
import '../css/Landing.css'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: true,
    }
  }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    const { isLoad } = this.state;
    if (isLoad !== true) {
      setTimeout(() => { this.setState({ isLoad: !this.state.isLoad }) }, 18000)
    }
    if (isLoad === true) {
      setTimeout(() => { this.setState({ isLoad: !this.state.isLoad }) },18000)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoad } = this.state;
    if (isLoad !== prevState.isLoad) {
      this.onLoad();
    }
  }

  render() {
    const { isLoad }=this.state;
    return (
      <div className='landing'>
        <div className='landingInfo' >
          <p className={isLoad ? 'slideFirst' : 'slideSecond'}>This site is an exercise. The data displayed here is not to be considered a model of reference.</p>
        </div>
        <Link className='landingLink' to='/live_currency'>
          <div className='divArrow'>
            <span className='arrow'></span>
          </div>
        </Link>
      </div>
    )
  }
}

export default Landing;
