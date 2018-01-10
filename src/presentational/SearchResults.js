import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({ setViewing, searchResults }) => {
  const resultsList = searchResults.map((result, i) => (
    <div className="box" key={result.id}>
      <div className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={result.images[138]} alt="Profile" />
          </figure>
        </div>
        <div className="media-content">
          <p><strong>{result.display_name}</strong></p>
          <p>{result.company}</p>
          <div id="more-info-button">
            <button value={i} onClick={setViewing} className="button is-info">More Info</button>
          </div>
        </div>
      </div>
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
