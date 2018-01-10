import React from 'react';
import { shallow } from 'enzyme';
import Header from '../presentational/Header';

it('renders without crashing', () => {
  shallow(<Header />);
});
