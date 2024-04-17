import React from 'react'
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
  return (
    <div className="side-navbar">
    <img src={logo} alt="My Logo" />
    <ul>
      <li><a href="#" target="_self">Home</a></li>
  
      {/* <li><a href="#" target="_self">Vitals</a></li> */}
    </ul>
  </div>
  )
}

export default Navbar;
