import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import Helper from './Helper';
// import { current_date, current_year } from './Helper';
import * as Helper from './Helper';
import './App.css';
import Navbar from './components/Navbar';

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
