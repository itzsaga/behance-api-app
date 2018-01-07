import React, { Component } from 'react';

import Header from '../presentational/Header';
import Search from '../presentational/Search';
import SearchResults from '../presentational/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    const proxyUrl = 'https://seth-behance-proxy.herokuapp.com/',
          targetUrl = `http://api.behance.net/v2/users?q=${this.state.searchTerm}&client_id=${process.env.REACT_APP_BEHANCE_API_KEY}`
    fetch(proxyUrl + targetUrl)
    .then(r => r.json())
    .then(json => {
      this.setState({
        searchResults: json.users
      })
    })
    .catch(err => {
      console.log(`There was an error searching: ${err}`);
    })
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <Search handleChange={this.handleChange} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
        {this.state.searchResults && <SearchResults searchResults={this.state.searchResults} />}
      </div>
    );
  }
}

export default App;
