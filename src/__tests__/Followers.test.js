import React from 'react';
import { shallow } from 'enzyme';
import Followers from '../presentational/Followers';

it('renders without crashing', () => {
  const followers = [{
    id: 5724657,
    location: 'Shanghai, China',
    company: 'The Moon',
    occupation: 'Artist',
    url: 'https://www.behance.net/eris6027',
    display_name: 'eris eris'
  }];

  shallow(<Followers followers={followers} />);
});
