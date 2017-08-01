import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {
  constructor () {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <h1>THIS IS WORKING</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
