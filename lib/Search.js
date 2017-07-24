import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome, Choose a City</h1>
        <input type="text" placeholder="Enter a City"/>
        <button type="submit">Search</button>
      </div>
    );
  }
}
