import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
  }
    render() {
      return (
        <div>
          <p>Logo</p>
          <form>
            <input placeholder="Search"
            onChange={this.handleInputChange}
            />  
            </form>
        </div>
      );
    }
};

export default SearchBar;



// on the icon bar left hand side is just logo
// then a search bar
// compass icon shows people
// heart icon is activity feed
// last icon is profile
