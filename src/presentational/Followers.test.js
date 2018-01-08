import React from 'react';
import ReactDOM from 'react-dom';
import Followers from './Followers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Followers />, div);
});
