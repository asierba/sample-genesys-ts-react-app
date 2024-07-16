import React from 'react';
import logo from './logo.svg';
import './App.css';
const platformClient = require('purecloud-platform-client-v2/dist/node/purecloud-platform-client-v2.js');


console.log('platformClient', platformClient);

let error: any = null;

try {
  console.log('platformClient.ApiClient.instance', platformClient.ApiClient.instance);
} catch (e) {
  console.error('platformClient.ApiClient.instance', e);
  error = e;
}


function App() {
  return (
    <div className="App">
      {error && <h1>{error.toString()}</h1> }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
