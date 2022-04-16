import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/Root'
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
reportWebVitals();
