// React
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './styles/css.css';

// Components
import App from './container/App';

// Service Worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') // eslint-disable-line
);

registerServiceWorker();
