import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from '../presentational/SearchResults';

it('renders without crashing', () => {
  const searchResults = [{
    id: 433679,
    first_name: 'Brosmind',
    last_name: '®',
    username: 'brosmind',
    city: 'Barcelona',
    state: '',
    country: 'Spain',
    location: 'Barcelona, Spain',
    company: 'Brosmind SL',
    occupation: '',
    created_on: 1304347499,
    url: 'https://www.behance.net/brosmind',
    images: {
      50: 'https://mir-s3-cdn-cf.behance.net/user/50/433679.54668a4bf09f6.jpg',
      100: 'https://mir-s3-cdn-cf.behance.net/user/100/433679.54668a4bf09f6.jpg',
      115: 'https://mir-s3-cdn-cf.behance.net/user/115/433679.54668a4bf09f6.jpg',
      138: 'https://mir-s3-cdn-cf.behance.net/user/138/433679.54668a4bf09f6.jpg',
      230: 'https://mir-s3-cdn-cf.behance.net/user/230/433679.54668a4bf09f6.jpg',
      276: 'https://mir-s3-cdn-cf.behance.net/user/276/433679.54668a4bf09f6.jpg'
    },
    display_name: 'Brosmind ®',
    fields: [
      'Illustration',
      'Character Design',
      'Advertising'
    ],
    has_default_image: 0,
    website: 'www.brosmind.com',
    stats: {
      followers: 23770,
      following: 15,
      appreciations: 37985,
      views: 484739,
      comments: 1
    }
  }];

  const setViewing = () => {};

  shallow(<SearchResults searchResults={searchResults} />);
});
