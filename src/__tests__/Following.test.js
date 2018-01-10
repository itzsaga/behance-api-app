import React from 'react';
import { shallow } from 'enzyme';
import Following from '../presentational/Following';

it('renders without crashing', () => {
  const following = [{
    id: 17814879,
    first_name: 'Fernando',
    last_name: 'Domínguez Cózar',
    username: 'fernandodo2907',
    city: 'Valencia',
    state: '',
    country: 'Spain',
    location: 'Valencia, Spain',
    company: 'Fernando Domínguez Cózar',
    occupation: 'Art Director',
    created_on: 1442408139,
    url: 'https://www.behance.net/fernandodo2907',
    images: {
      50: 'https://mir-s3-cdn-cf.behance.net/user/50/8b015917814879.55f9bb7d08c24.jpg',
      100: 'https://mir-s3-cdn-cf.behance.net/user/100/8b015917814879.55f9bb7d08c24.jpg',
      115: 'https://mir-s3-cdn-cf.behance.net/user/115/8b015917814879.55f9bb7d08c24.jpg',
      138: 'https://mir-s3-cdn-cf.behance.net/user/138/8b015917814879.55f9bb7d08c24.jpg',
      230: 'https://mir-s3-cdn-cf.behance.net/user/230/8b015917814879.55f9bb7d08c24.jpg',
      276: 'https://mir-s3-cdn-cf.behance.net/user/276/8b015917814879.55f9bb7d08c24.jpg'
    },
    display_name: 'Fernando Domínguez Cózar',
    fields: [
      'Art Direction',
      'Animation',
      'Film'
    ],
    has_default_image: 0,
    website: 'www.fernandominguez.com',
    stats: {
      followers: 1060,
      following: 8,
      appreciations: 2456,
      views: 11319,
      comments: 0
    }
  }];

  shallow(<Following following={following} />);
});
