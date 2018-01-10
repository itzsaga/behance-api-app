import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from '../presentational/SearchResults';

it('renders without crashing', () => {
  const searchResults = [{
    id: 433679,
    company: 'Brosmind SL',
    images: {
      138: 'https://mir-s3-cdn-cf.behance.net/user/138/433679.54668a4bf09f6.jpg'
    },
    display_name: 'Brosmind ®'
  }];

  shallow(<SearchResults searchResults={searchResults} />);
});
