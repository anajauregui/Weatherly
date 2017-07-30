import React from 'react';
import './Search.css'
import Locations from '../utils/Locations';
import Trie from '../utils/Trie2';


export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.trie = {}

    this.state = {
      location: '',
      suggestions: []
    }
  }

  componentDidMount() {
    const trie = new Trie()
    trie.populate(Locations)
    this.trie = trie
  }

  getVal(e) {
    const suggestions = this.trie.suggest((e.target.value).toLowerCase());
    this.setState({
      location: e.target.value,
      suggestions
    })
  }

  render() {
    return(
      <div className="search">
        <div className="user-inpts">
          <input type="text" placeholder="Enter a City" className="city-search" onChange={this.getVal.bind(this)}/>
          <button type="submit" className="sub-btn" onClick={() => {this.props.getApi(this.state.location)}}>Submit</button>
        </div>
        <div className="outputs">
          <section className="addSuggestions">
            {this.state.suggestions.map( (city, i) => <button className="city-name" key={i} onClick={ () => input.value.innerHTML({city})}>{city}</button>)}
          </section>
        </div>
      </div>
    )
  }
}
