import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameBadge from './NameBadge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameBadge/>
      </header>
    </div>
  );
}

export default App;
