import React from 'react';
import '../Styles/Search.css';
import Locations from '../utils/Locations';
import Trie from '../utils/Trie';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.trie = {};

    this.state = {
      location: '',
      suggestions: [],
    };
  }

  componentDidMount() {
    const trie = new Trie();
    trie.populate(Locations);
    this.trie = trie;
  }

  getVal(e) {
    const suggestions = this.trie.suggest((e.target.innerHTML || e.target.value));
    this.setState({
      location: e.target.innerHTML || e.target.value,
      suggestions: suggestions,
    });
  }

  render() {
    const newSuggestion = this.state.suggestions.map((city, i) =>
      <button
        className="city-name"
        key={i}
        onClick={(e) => {
          document.querySelector('.city-search').value = city;
          this.getVal(e);
        }}>{city}</button>);

    if (this.state.location === '') {
      this.state.suggestions = [];
    }

    return (
      <div className="search">
        <div className="user-inpts">
          <input type="text" placeholder="Enter a City" className="city-search" onChange={this.getVal.bind(this)}/>
          <button type="submit" className="sub-btn" onClick={() => { this.props.getApi(this.state.location)}}>Submit</button>
        </div>
        <div className="outputs">
          <section className="addSuggestions">
            {newSuggestion}
          </section>
        </div>
      </div>
    );
  }
}
