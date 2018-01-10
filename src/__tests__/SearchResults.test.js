import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from '../presentational/SearchResults';

it('renders without crashing', () => {
  shallow(<SearchResults />);
});
