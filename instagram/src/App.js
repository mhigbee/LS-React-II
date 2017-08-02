import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data';


class App extends Component {
  constructor () {
    super();
    this.state = {
      postData,
    }
  }
  render() {
    return (
      <div className="App">
        <h1>THIS IS WORKING</h1>
        <SearchBar />
        <PostContainer postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
