import React from 'react';
import { shallow } from 'enzyme';
import Followers from '../presentational/Followers';

it('renders without crashing', () => {
  const followers = [{
    id: 5724657,
    first_name: 'eris',
    last_name: 'eris',
    username: 'eris6027',
    city: 'Shanghai',
    state: '',
    country: 'China',
    location: 'Shanghai, China',
    company: '',
    occupation: '',
    created_on: 1398408159,
    url: 'https://www.behance.net/eris6027',
    images: {
      50: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/profile/no-image-50.jpg?cb=264615658',
      115: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/profile/no-image-115.jpg?cb=264615658',
      138: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/profile/no-image-138.jpg?cb=264615658'
    },
    display_name: 'eris eris',
    fields: [],
    has_default_image: 1,
    website: '',
    stats: {
      followers: 2,
      following: 271,
      appreciations: 0,
      views: 0,
      comments: 0
    }
  }];

  shallow(<Followers followers={followers} />);
});
