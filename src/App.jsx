import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import Helper from './Helper';
// import { current_date, current_year } from './Helper';
import * as Helper from './Helper';
import './App.css';

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

function MainContent() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Lorem ipsum dolor smit</li>
        <li>Lorem ipsum dolor smit</li>
        <li>Lorem ipsum dolor smit</li>
        <li>Lorem ipsum dolor smit</li>
        <li>Lorem ipsum dolor smit</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>
        © {Helper.GetCurrentYear()} THE LEARNERS. All Rights Reserved.
      </small>
      <small>.Net Dev Muhammad Asim</small>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
