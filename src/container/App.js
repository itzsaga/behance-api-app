import React, { Component } from 'react';

import Header from '../presentational/header';
import Search from '../presentational/search';

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

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <Search handleChange={this.handleChange} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
