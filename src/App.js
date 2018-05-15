import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ds, client } from './ds';

class App extends Component {

  onTestRpcClick = () => {
    ds.rpc.make('ping-rpc', { a: 6, b: 7 }, function (err, result) {
      console.log('ping-rpc result: ', result, err);
      client.event.emit('ping-rpc-message', { message: `Somebody called rpc with result: ${result}` })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onTestRpcClick}>
          Call test rpc
        </button>
      </div>
    );
  }
}

export default App;
