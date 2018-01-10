import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../presentational/Projects';

it('renders without crashing', () => {
  const projects = [{
    id: 58381485,
    name: 'UNDER ARMOUR: GIFT LIKE A PRO',
    published_on: 1513173196,
    created_on: 1509559669,
    modified_on: 1513179811,
    url: 'https://www.behance.net/gallery/58381485/UNDER-ARMOUR-GIFT-LIKE-A-PRO',
    privacy: 'public',
    fields: [
      'Advertising',
      'Illustration',
      'Digital Art'
    ],
    covers: {
      115: 'https://mir-s3-cdn-cf.behance.net/projects/115/668d1758381485.Y3JvcCwzNjAzLDI4MjAsOTUxLDg4.jpg',
      202: 'https://mir-s3-cdn-cf.behance.net/projects/202/668d1758381485.Y3JvcCwzNjAzLDI4MjAsOTUxLDg4.jpg',
      230: 'https://mir-s3-cdn-cf.behance.net/projects/230/668d1758381485.Y3JvcCwzNjAzLDI4MjAsOTUxLDg4.jpg',
      404: 'https://mir-s3-cdn-cf.behance.net/projects/404/668d1758381485.Y3JvcCwzNjAzLDI4MjAsOTUxLDg4.jpg',
      original: 'https://mir-s3-cdn-cf.behance.net/projects/original/668d1758381485.Y3JvcCwzNjAzLDI4MjAsOTUxLDg4.jpg'
    },
    mature_content: 0,
    mature_access: 'allowed',
    owners: [
      {
        id: 56263,
        first_name: 'Mike',
        last_name: 'Campau',
        username: 'mikecampau',
        city: 'Ann Arbor',
        state: 'Michigan',
        country: 'United States',
        location: 'Ann Arbor, MI, USA',
        company: 'mikecampau.com',
        occupation: 'Digital Artist',
        created_on: 1197681674,
        url: 'https://www.behance.net/mikecampau',
        images: {
          50: 'https://mir-s3-cdn-cf.behance.net/user/50/f70da556263.5a293b702c6a8.jpg',
          100: 'https://mir-s3-cdn-cf.behance.net/user/100/f70da556263.5a293b702c6a8.jpg',
          115: 'https://mir-s3-cdn-cf.behance.net/user/115/f70da556263.5a293b702c6a8.jpg',
          138: 'https://mir-s3-cdn-cf.behance.net/user/138/f70da556263.5a293b702c6a8.jpg',
          230: 'https://mir-s3-cdn-cf.behance.net/user/230/f70da556263.5a293b702c6a8.jpg',
          276: 'https://mir-s3-cdn-cf.behance.net/user/276/f70da556263.5a293b702c6a8.jpg'
        },
        display_name: 'Mike Campau',
        fields: [
          'Digital Art',
          'Photography',
          'Advertising'
        ],
        has_default_image: 0,
        website: 'http://www.mikecampau.com',
        stats: {
          followers: 97852,
          following: 828,
          appreciations: 196835,
          views: 2947084,
          comments: 295
        }
      }
    ],
    stats: {
      views: 3134,
      appreciations: 433,
      comments: 16
    },
    conceived_on: 1509494400
  }];

  shallow(<Projects projects={projects} />);
});
