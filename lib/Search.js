import React from 'react';
import './Search.css';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  getVal(e) {
    this.setState({
      city: e.target.value
    })
  }

  search() {
    return this.state.city;
  }

  render() {
    return (
      <div className="welcome">
        <h1>Welcome, Choose a City</h1>
        <div>
          <input type="text" placeholder="Enter a City" onChange={this.getVal.bind(this)}/>
          <button type="submit" onClick={this.search.bind(this)}>Search</button>
        </div>
      </div>
    );
  }
}
