import React from 'react';
import { shallow } from 'enzyme';
import App from '../container/App';

it('renders without crashing', () => {
  shallow(<App />);
});
