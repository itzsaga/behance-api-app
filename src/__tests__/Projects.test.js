import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../presentational/Projects';

it('renders without crashing', () => {
  const projects = [{
    id: 58381485,
    name: 'UNDER ARMOUR: GIFT LIKE A PRO',
    url: 'https://www.behance.net/gallery/58381485/UNDER-ARMOUR-GIFT-LIKE-A-PRO',
    covers: {
      404: 'https://mir-s3-cdn-cf.behance.net/projects/404/668d1758381485.Y3JvcCwzNjAzLDI4MjAsOTUxLDg4.jpg'
    },
    stats: {
      views: 3134
    }
  }];

  shallow(<Projects projects={projects} />);
});
