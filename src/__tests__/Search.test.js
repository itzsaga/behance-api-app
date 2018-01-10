import React from 'react';
import { shallow } from 'enzyme';
import Search from '../presentational/Search';

it('renders without crashing', () => {
  shallow(<Search />);
});
