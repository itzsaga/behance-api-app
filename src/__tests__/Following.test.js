import React from 'react';
import ReactDOM from 'react-dom';
import Following from '../presentational/Following';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Following />, div);
});
