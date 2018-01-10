import React from 'react';
import { shallow } from 'enzyme';
import WorkExperience from '../presentational/WorkExperience';

it('renders without crashing', () => {
  const workExperience = [{
    'position': 'Digital Artist',
    'start_date': '05-2009',
    'organization': 'Mike Campau Digital Imagery LLC',
    'location': 'MI, USA'
  }];

  shallow(<WorkExperience workExperience={workExperience} />);
});
