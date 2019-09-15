import React from 'react';
import './App.css';
import { ThreeScene } from './compoments/three-scene';
import { Button, TextField } from '@material-ui/core';

class App extends React.Component {
  threeSceneRef = React.createRef<ThreeScene>();

  private inputUrl: string = '';

  constructor(props: any) {
    super(props);
    this.onLoadVRM = this.onLoadVRM.bind(this);
  }

  onLoadVRM() {
    if (!this.threeSceneRef.current) {
      return;
    }
    this.threeSceneRef.current.updateVrmUrl(this.inputUrl);
  }

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
        <a className="App-link" href="./references/">
          References
        </a>
        <a className="App-link" href="./swagger/">
          Api Docs
        </a>
        <ThreeScene ref={this.threeSceneRef} />
        <TextField
          style={{ width: 800 }}
          placeholder="VRMファイルのURLを入力してください"
          onChange={(e) => (this.inputUrl = e.target.value)}
        />
        <Button variant="contained" size="large" color="primary" onClick={this.onLoadVRM}>
          VRMをロードする
        </Button>
      </div>
    );
  }
}

export default App;
