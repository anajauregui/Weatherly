import React from 'react';
import Locations from '../utils/Locations';
import Trie from '../utils/Trie2';


export default class Search extends React.Component {
  constructor(props) {
    super()

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
      <div>
        <input type="text" placeholder="Enter a City" onChange={this.getVal.bind(this)}/>
        <button type="submit" onClick={() => {this.props.getApi(this.state.location)}}>Submit</button>
      </div>
    )
  }
}
