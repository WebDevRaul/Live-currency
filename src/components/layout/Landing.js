import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

//Css
import '../css/Landing.css'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false
    }
  }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    setTimeout(() => {this.setState({ isLoad: true })}, 2000)
  }

  render() {
    return (
      <div className='landing'>
        <div>
          <p className={classnames('test', {'test2' : this.state.isLoad})}>Text here</p>
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
