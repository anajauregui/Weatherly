import React from 'react';
import './Search.css';
// import Trie from '../utils/Trie';

export default class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      location: '',
      suggestions: []
    }
  }

  getVal(e) {
    //use trie suggest as user inputs values

    const suggestions = this.props.trie.suggest(e.target.value)
    this.setState({
      location: e.target.value,
      suggestions
    })
  }

  render() {
console.log(this.state.suggestions);
    return (
      <div className="welcome">
        <h1>Welcome, Choose a City</h1>
        <div>
          <input type="text" placeholder="Enter a City" onChange={this.getVal.bind(this)}/>
          <button type="submit" onClick={() => {this.props.getApi(this.state.location)}}>Submit</button>
        </div>
      </div>
    );
  }
}
