import React from 'react';
import './Search.css';

export default class Search extends React.Component {

  render() {
    return (
      <div className="welcome">
        <h1>Welcome, Choose a City</h1>
        <div>
          <input type="text" placeholder="Enter a City"/>
          <button type="submit">Search</button>
        </div>
      </div>
    );
  }
}
