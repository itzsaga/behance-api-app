import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ setViewing, searchResults }) => {
  const resultsList = searchResults.map((result, i) => (
    <div className="box" key={result.id}>
      <div className="content">
        <p>
          <strong>{result.display_name}</strong>
          <br />
          {result.company}
        </p>
      </div>
      <button value={i} onClick={setViewing} className="button is-info">More Info</button>
    </div>
  ));
  return (
    <div id="results">
      {resultsList}
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  setViewing: PropTypes.func.isRequired
};

export default SearchResults;
