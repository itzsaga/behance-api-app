import React, { Component } from 'react';

import Header from '../presentational/Header';
import Profile from '../presentational/Profile';
import Search from '../presentational/Search';
import SearchResults from '../presentational/SearchResults';
import apiCalls from '../helpers/apiCalls';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: '',
      viewing: ''
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
          targetUrl = `https://api.behance.net/v2/users?q=${this.state.searchTerm}&client_id=${process.env.REACT_APP_BEHANCE_API_KEY}`
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

  setViewing = (e) => {
    this.fetchUserInfo(this.state.searchResults[e.target.value].id)
    this.setState({
      viewing: e.target.value
    })
  }

  fetchUserInfo = (userId) => {
    apiCalls.fetchUserFollowers(userId, this.updateState)
    apiCalls.fetchUserFollowings(userId, this.updateState)
    apiCalls.fetchUserInfo(userId, this.updateState)
    apiCalls.fetchUserProjects(userId, this.updateState)
    apiCalls.fetchWorkExperience(userId, this.updateState)
  }

  updateState = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <Search 
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        {this.state.searchResults && !this.state.viewing &&
          <SearchResults 
            searchResults={this.state.searchResults} 
            setViewing={this.setViewing}
          />
        }
        {this.state.viewing && <Profile />}
      </div>
    );
  }
}

export default App;
