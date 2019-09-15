import React from 'react';
import './App.css';
import { ThreeScene } from './compoments/three-scene';

class App extends React.Component {
  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-link" href="/references/">
            References
          </a>
          <a className="App-link" href="/swagger/">
            Api Docs
          </a>
          <ThreeScene />
        </header>
      </div>
    );
  }
}

export default App;
