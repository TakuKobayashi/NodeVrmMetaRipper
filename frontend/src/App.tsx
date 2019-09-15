import React from 'react';
import './App.css';
import ThreeScene from './compoments/three-scene'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/references/"
        >
          References
        </a>
        <a
          className="App-link"
          href="/swagger/"
        >
          Api Docs
        </a>
      </header>
      <ThreeScene />
    </div>
  );
}

export default App;
