import React from 'react';

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

export default SearchResults;
