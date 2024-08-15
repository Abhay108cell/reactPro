
import React from 'react';
import './NavBar.Module.css';

const NavBar = () => {
  return (
    <nav className="navigation">
      <div className="logo">
         <img src="/images/logo.png" alt="do some coding logo" />      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
