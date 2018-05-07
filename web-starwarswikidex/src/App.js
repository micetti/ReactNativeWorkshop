import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome, this part is written in React</h1>
        </header>
        <p className="App-intro">
          below you can see React Native on the same page. IN THE WEB!!!!!!!
        </p>
      </div>
    );
  }
}

export default App;
