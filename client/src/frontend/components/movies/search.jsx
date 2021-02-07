import React from 'react'
import SearchResults from './search_results'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerms: ''
    }
  }

  componentDidUpdate() {
    this.props.fetchSearchResults(this.state.searchTerms)
  }

  handleChanges(e) {
    this.setState({
      searchTerms: e.target.value
    })
  }

  render() {
    return (
      <>
        <input 
          type='text' 
          onChange={e => this.handleChanges(e)} 
          value={this.state.searchTerms}/>
        {
          this.props.searchResults != undefined && this.state.searchTerms.length > 0 ? 
          <SearchResults results={this.props.searchResults}/> :
          null
        }
      </>
    )
  }
}

export default Search