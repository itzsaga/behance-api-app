import React from 'react';
import { shallow } from 'enzyme';
import Following from '../presentational/Following';

it('renders without crashing', () => {
  const following = [{
    id: 17814879,
    location: 'Valencia, Spain',
    company: 'Fernando Domínguez Cózar',
    occupation: 'Art Director'
  }];

  shallow(<Following following={following} />);
});
