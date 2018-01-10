import React from 'react';

const Search = ({ handleChange, handleSearch, searchTerm }) => (
  <div id="search">
    <div className="field has-addons has-addons-centered">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search Behance Users"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleSearch} >
          Search
        </button>
      </div>
    </div>
  </div>
);

export default Search;
