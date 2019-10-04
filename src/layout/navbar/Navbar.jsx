import React, { Component } from 'react';
import classnames  from 'classnames';
import { Link } from 'react-router-dom';

import Logo from '../../components/common/logo/Logo';
import StyledNavbar from './Styled_Navbar';

class Navbar extends Component {
  state = { isOpen: false };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  } 

  onClick = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state;
    return (
      <StyledNavbar>
        <nav className='navbar navbar-light'>
          <div className='nav-wrapper'>
            <div className='nav-header'>
              <div><Logo /></div>
              <button type='button' className='navbar-toggler' onClick={this.onToggle}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <ul className={classnames('nav-links', {'show-nav' : isOpen})} >
              <li><Link to='/live' onClick={this.onClick}>Home</Link></li>
              <li><Link to='/about' onClick={this.onClick}>About</Link></li>
            </ul>
          </div>
        </nav>
      </StyledNavbar>
    )
  }
}

export default Navbar;