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
    //use trie suggest as user inputs values
    props.trie.suggest(e.target.value)
    this.setState({
      city: e.target.value
    })
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
