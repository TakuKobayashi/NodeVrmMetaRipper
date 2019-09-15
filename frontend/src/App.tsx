import React from 'react';
import './App.css';
import { ThreeScene } from './compoments/three-scene';
import {Button} from "@material-ui/core";

class App extends React.Component {
  threeSceneRef = React.createRef<ThreeScene>();

    constructor(props: any) {
        super(props);
        this.onLoadVRM = this.onLoadVRM.bind(this);
    }

  onLoadVRM(){
      if (!this.threeSceneRef.current) {
          return;
      }
      this.threeSceneRef.current.updateVrmUrl('https://taptappun.s3-ap-northeast-1.amazonaws.com/test/AliciaSolid.vrm');
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
        <header className="App-header">
          <a className="App-link" href="/references/">
            References
          </a>
          <a className="App-link" href="/swagger/">
            Api Docs
          </a>
          <ThreeScene ref={this.threeSceneRef} />
          <Button variant="contained" size="large" color="primary" onClick={this.onLoadVRM}>
             VRMをロードする
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
