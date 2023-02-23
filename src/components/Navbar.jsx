import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div title="brand" className="brand">
        <img src={reactLogo} alt="Logo" />
        &nbsp;&nbsp;
        <h3 className="txt-blue">ReactFacts</h3>
      </div>

      <div title="nav items">
        <h4>React Practice - Project 1</h4>
      </div>
    </nav>
  );
}

export default Navbar;
