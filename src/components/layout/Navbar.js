import React, { Component } from 'react';
import classnames  from 'classnames';
import { Link } from 'react-router-dom';

//Components
import Logo from './Logo';

//Css
import '../css/Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state={
      show: false
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  };

   componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  };

   myRef = React.createRef();

   handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ show: false });
    };
  };

  onClickDelay = () => { setTimeout(() =>{ this.setState({ show: false }) }, 2000); };

  onClick = () => { this.setState({ show: !this.state.show }); };

  render() {
    const { show } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button
          className="navbar-toggler" 
          type="button"
          onClick={this.onClick}  
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={this.myRef} className={classnames('collapse navbar-collapse', { 'show' : show })}>
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active mr-3">
              <Link 
                to='/live_currency' 
                className='nav-link'
                onClick={this.onClickDelay}
              ><span>Home</span></Link>
            </li>
            <li className="nav-item active mr-3">
              <Link 
                to='/about' 
                className='nav-link'
                onClick={this.onClickDelay}
              ><span>About</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
