import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../presentational/Profile';

it('renders without crashing', () => {
  const user = {
    id: 103667,
    first_name: 'Niklas',
    last_name: 'Lundberg',
    username: 'diftype',
    city: 'Umeå',
    state: '',
    country: 'Sweden',
    location: 'Umeå, Sweden',
    company: 'Diftype',
    occupation: 'Visual Artist & Designer',
    created_on: 1241773571,
    url: 'https://www.behance.net/diftype',
    images: {
      50: 'https://mir-s3-cdn-cf.behance.net/user/50/103667.53f1d9793e923.jpg',
      100: 'https://mir-s3-cdn-cf.behance.net/user/100/103667.53f1d9793e923.jpg',
      115: 'https://mir-s3-cdn-cf.behance.net/user/115/103667.53f1d9793e923.jpg',
      138: 'https://mir-s3-cdn-cf.behance.net/user/138/103667.53f1d9793e923.jpg',
      230: 'https://mir-s3-cdn-cf.behance.net/user/230/103667.53f1d9793e923.jpg',
      276: 'https://mir-s3-cdn-cf.behance.net/user/276/103667.53f1d9793e923.jpg'
    },
    display_name: 'Niklas Lundberg',
    fields: [
      'Illustration',
      'Digital Art',
      'Art Direction'
    ],
    has_default_image: 0,
    website: 'http://www.diftype.com',
    stats: {
      followers: 7178,
      following: 116,
      appreciations: 14802,
      views: 180941,
      comments: 22,
      team_members: false
    },
    twitter: '@diftype',
    links: [
      {
        title: 'Diftype',
        url: 'http://www.diftype.com'
      },
      {
        title: 'Facebook',
        url: 'http://facebook.com/diftype'
      },
      {
        title: 'Twitter',
        url: 'http://twitter.com/diftype'
      },
      {
        title: 'Instagram',
        url: 'http://instagram.com/diftype'
      },
      {
        title: '&Reach',
        url: 'http://www.reach.tv/creatives/niklas-lundberg'
      }
    ],
    sections: {
      'Diftype - Niklas Lundberg': "Diftype is the artistic presence of Niklas Lundberg, a multidisciplinary Artist, Illustrator & Designer. For the past decade he has developed a unique and evocative style of contemporary art, notable for it's fine detail, dramatic lighting and intense textures. He has worked with a wide range of international clients such as Audi, Nissan, Infiniti, Red Bull Racing and the Grammy's.\n\nNiklas has been working professionally with Illustration, Graphic Design and Art Direction since 2006. He has gained worldwide recognition within numerous books and magazines such as IdN Magazine, Computer Arts and Advanced Photoshop. Niklas’s work is defined by his sense of composition, strong form, and attention to detail.\n\nRepresented by &Reach.",
      Clients: "Audi / DDB Sydney / Grammy's / Nissan / Infiniti / Red Bull Racing / TBWA\\Chiat\\Day / TBWA\\Paris / MTV Australia / Ars Thanea / Eurosport / Mogo / Visa / NCC / HUMlab / Absolut Vodka / Racer Group / The Brand Union / Heja! / Eristoff Vodka / Shutterstock / T-post / Cap & Design / Computer Arts / Troika / Tronic Studio / Superstudio / Norrlandsoperan / Umeå C / Umeågalan",
      'Publications & Recogntion': 'IdN Magazine / Computer Arts / CA Book of Inspiration / Advanced Photoshop / Bangstyle Art Book / Book of Creation / OFFF Year Zero / CAP&Design / Big Book of Contemporary Illustration / Shutterstock Designer Passport / Psdtuts+ / Computerlove / Abduzeedo / DACS / Nation World Graphic Tour / Depthcore Featured Artist / DAHRA / UU Theory / UP2D8 / Stroke Artfair / Baetulona'
    },
    features: [
      {
        projects: [
          {
            id: 55987493,
            featured_on: 1505303136
          }
        ],
        site: {
          id: 1,
          name: 'Behance.net',
          key: 'net',
          icon: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/site/favicon.ico',
          url: 'http://www.behance.net',
          domain: 'www.behance.net',
          ribbon: {
            image: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/galleries/icons/ribbons/1x/network.png',
            image_2x: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/galleries/icons/ribbons/2x/network@2x.png'
          }
        }
      },
      {
        projects: [
          {
            id: 460555,
            featured_on: 1271111401
          },
          {
            id: 40744411,
            featured_on: 1473526803
          }
        ],
        site: {
          id: 3,
          parent_id: 2,
          name: 'Graphic Design',
          key: 'typography',
          icon: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/galleries/icons/square/1x/gallery-2.png?cb=264615658',
          app_icon: '?cb=264615658',
          domain: 'typographyserved.com',
          url: 'https://www.behance.net/galleries/2/Graphic-Design',
          ribbon: {
            image: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/1x/ribbons/graphic-design.png?cb=264615658',
            image_2x: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/2x/ribbons/graphic-design.png?cb=264615658'
          }
        },
        num_of_projects: 2
      },
      {
        projects: [
          {
            id: 460555,
            featured_on: 1342504804
          },
          {
            id: 5829995,
            featured_on: 1385283603
          }
        ],
        site: {
          id: 16,
          parent_id: 9,
          name: 'Advertising',
          key: 'promotion',
          icon: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/galleries/icons/square/1x/gallery-9.png?cb=264615658',
          app_icon: '?cb=264615658',
          domain: 'advertisingserved.com',
          url: 'https://www.behance.net/galleries/9/Advertising',
          ribbon: {
            image: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/1x/ribbons/adve.png?cb=264615658',
            image_2x: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/2x/ribbons/adve.png?cb=264615658'
          }
        },
        num_of_projects: 2
      },
      {
        projects: [
          {
            id: 1658072,
            featured_on: 1320406202
          },
          {
            id: 3125625,
            featured_on: 1330878601
          },
          {
            id: 3365681,
            featured_on: 1332824403
          },
          {
            id: 5829995,
            featured_on: 1355083202
          },
          {
            id: 19103231,
            featured_on: 1409074201
          },
          {
            id: 25915151,
            featured_on: 1432557001
          },
          {
            id: 34218983,
            featured_on: 1460543401
          },
          {
            id: 47252157,
            featured_on: 1487728813
          }
        ],
        site: {
          id: 15,
          parent_id: 1,
          name: 'Illustration',
          key: 'digitalart',
          icon: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/galleries/icons/square/1x/gallery-1.png?cb=264615658',
          app_icon: '?cb=264615658',
          domain: 'digitalartserved.com',
          url: 'https://www.behance.net/galleries/1/Illustration',
          ribbon: {
            image: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/1x/ribbons/illustration.png?cb=264615658',
            image_2x: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/2x/ribbons/illustration.png?cb=264615658'
          }
        },
        num_of_projects: 8
      },
      {
        projects: [
          {
            id: 55987493,
            featured_on: 1510281006
          }
        ],
        site: {
          id: 305,
          parent_id: 0,
          name: 'After Effects',
          key: 'effects',
          icon: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/galleries/icons/square/1x/effects.png?cb=264615658',
          app_icon: '?cb=264615658',
          domain: '',
          url: 'https://www.behance.net/galleries/adobe/7/After-Effects',
          ribbon: {
            image: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/1x/ribbons/after-effects.png?cb=264615658',
            image_2x: 'https://a5.behance.net/2604992a5a6a3839cf279cf9beb3cd63d5ce5354/img/shared_icons/png/2x/ribbons/after-effects.png?cb=264615658'
          }
        }
      }
    ],
    social_links: [
      {
        social_id: 2,
        url: 'http://facebook.com/diftype',
        service_name: 'Facebook',
        value: 'diftype'
      },
      {
        social_id: 1,
        url: 'http://twitter.com/diftype',
        service_name: 'Twitter',
        value: 'diftype'
      },
      {
        social_id: 12,
        url: 'http://instagram.com/diftype',
        service_name: 'Instagram',
        value: 'diftype'
      },
      {
        social_id: 4,
        url: 'http://linkedin.com/in/diftype',
        service_name: 'LinkedIn',
        value: 'in/diftype'
      }
    ]
  };

  shallow(<Profile user={user} />);
});
