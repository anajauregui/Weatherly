import React from 'react';
import './Search.css';
import Key from './Key';

export default class Search extends React.Component {
  constructor(props) {
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

  setApi() {
    var api = `http://api.wunderground.com/api/${Key}/conditions/hourly/forecast10day/q/CO/${this.state.city}.json`
    console.log(api);
  }

  render() {

    return (
      <div className="welcome">
        <h1>Welcome, Choose a City</h1>
        <div>
          <input type="text" placeholder="Enter a City" onChange={this.getVal.bind(this)}/>
          <button type="submit" onClick={() => {this.props.getApi(this.state.city)}}>Submit</button>
        </div>
      </div>
    );
  }
}
