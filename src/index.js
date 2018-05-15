import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createDeepstream from 'deepstream.io-client-js';
const ds = createDeepstream('127.0.0.1:6021/deepstream');
ds.login({ username: "webagent", UUID: "webagent", type: 'webhook' }, (success, data) => {
    console.log("Login result: ", success);
    if (success) {
        console.log('Login data: ', data);
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
