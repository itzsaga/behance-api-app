import React from 'react';
import ReactDOM from 'react-dom';
import Followers from '../presentational/Followers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Followers />, div);
});
