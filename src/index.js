import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.css';
import App from './containers/App/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
