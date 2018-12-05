import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import Logo from './Logo';

//Css
import '../css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active mr-3">
              <Link to='/live_currency' className='nav-link'><span>Home</span></Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to='/about' className='nav-link'><span>About</span></Link>
            </li>
            <li className="nav-item active mr-3">
              <Link to='/Source' className='nav-link'><span>Source</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
