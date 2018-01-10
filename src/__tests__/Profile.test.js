import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../presentational/Profile';

it('renders without crashing', () => {
  const user = {
    location: 'Umeå, Sweden',
    company: 'Diftype',
    occupation: 'Visual Artist & Designer',
    url: 'https://www.behance.net/diftype',
    images: {
      276: 'https://mir-s3-cdn-cf.behance.net/user/276/103667.53f1d9793e923.jpg'
    },
    display_name: 'Niklas Lundberg',
    website: 'http://www.diftype.com',
    sections: {
      'Diftype - Niklas Lundberg': "Diftype is the artistic presence of Niklas Lundberg, a multidisciplinary Artist, Illustrator & Designer. For the past decade he has developed a unique and evocative style of contemporary art, notable for it's fine detail, dramatic lighting and intense textures. He has worked with a wide range of international clients such as Audi, Nissan, Infiniti, Red Bull Racing and the Grammy's.\n\nNiklas has been working professionally with Illustration, Graphic Design and Art Direction since 2006. He has gained worldwide recognition within numerous books and magazines such as IdN Magazine, Computer Arts and Advanced Photoshop. Niklas’s work is defined by his sense of composition, strong form, and attention to detail.\n\nRepresented by &Reach."
    }
  };

  shallow(<Profile user={user} />);
});
