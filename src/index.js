// Bulma & any other CSS
import 'bulma/css/bulma.css';

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';

// Components
import App from './container/App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // eslint-disable-line
);

registerServiceWorker();
