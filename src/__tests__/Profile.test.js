import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../presentational/Profile';

it('renders without crashing', () => {
  shallow(<Profile />);
});
