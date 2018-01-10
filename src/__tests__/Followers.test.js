import React from 'react';
import { shallow } from 'enzyme';
import Followers from '../presentational/Followers';

it('renders without crashing', () => {
  shallow(<Followers />);
});
