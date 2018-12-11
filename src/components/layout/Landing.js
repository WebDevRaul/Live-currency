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
        <Link className='landingBtn' to='/live_currency'>
          <p>
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>i</span>
            <span>n</span>
            <span>u</span>
            <span>e</span>
          </p><span className='landingBtnArrow'></span>
        </Link>
      </div>
    )
  }
}

export default Landing;
