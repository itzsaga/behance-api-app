import React from 'react';
import { shallow } from 'enzyme';
import WorkExperience from '../presentational/WorkExperience';

it('renders without crashing', () => {
  shallow(<WorkExperience />);
});
