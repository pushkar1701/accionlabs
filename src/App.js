import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
import Demo from './components/Demo/Demo';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
      <Home />
      <About />
      <Demo />
      </div>
    );
  }
}

export default App;
