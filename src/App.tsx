import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>This is for an E-Reader</h1>
      <p>A simple test of websites on an e-reader</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <p className="style-test">Testing basic css styles</p>
      <h3>Info</h3>
      <p>{window.navigator.userAgent}</p>
      <p>Screen width: {window.innerWidth}px, height: {window.innerHeight}px</p>
    </div>
  );
}

export default App;
