import React from 'react';
import PropTypes from 'prop-types';

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
        <a className="button is-primary" onClick={handleSearch} >
          Search
        </a>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default Search;
