import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes from "./components/heroes";
import Hero from "./components/hero";

class App extends Component {
  render() {
    return (
      <Heroes />
    );
  }
}

export default App;
