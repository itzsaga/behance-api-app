import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../presentational/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
