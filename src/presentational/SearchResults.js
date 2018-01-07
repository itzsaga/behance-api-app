import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ searchResults }) => {
  const resultsList = searchResults.map(result => (
    <div className="box" key={result.id}>
      <div className="content">
        <p>
          <strong>{result.display_name}</strong>
          <br />
          {result.company}
        </p>
      </div>
      <a href={result.url} className="button is-info" target="_blank">More Info</a>
    </div>
  ));
  return (
    <div id="results">
      {resultsList}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResults;
