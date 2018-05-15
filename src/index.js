import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ds from './ds';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
