import React from 'react';
import { shallow } from 'enzyme';
import Following from '../presentational/Following';

it('renders without crashing', () => {
  shallow(<Following />);
});
