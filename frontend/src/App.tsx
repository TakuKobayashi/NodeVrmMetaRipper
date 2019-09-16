import React from 'react';
import './App.css';
import axios from 'axios'
import { ThreeScene } from './compoments/three-scene';
import { AppBar, Box, Button, Link, TextField, Toolbar, Typography } from '@material-ui/core';

interface LoadJsonState {
  json: string;
}

class App extends React.Component<{}, LoadJsonState> {
  threeSceneRef = React.createRef<ThreeScene>();
  state: LoadJsonState = {
    json: '',
  };

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
    axios.get("https://qv2p534cl3.execute-api.ap-northeast-1.amazonaws.com/dev/ripper/vrm", {
      params: {
        url: this.inputUrl,
      }
    }).then(response => {
      this.setState({json: JSON.stringify(response.data, null, 2)});
      console.log(this.state.json);
    })
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
        <AppBar position="relative" color="inherit">
          <Toolbar>
            <Button href="./references/" className="App-link">
              References
            </Button>
            <Button href="./swagger/" className="App-link">
              Api Docs
            </Button>
          </Toolbar>
        </AppBar>
        <ThreeScene ref={this.threeSceneRef} />
        <TextField
          style={{ width: 800 }}
          placeholder="VRMファイルのURLを入力してください"
          onChange={(e) => (this.inputUrl = e.target.value)}
        />
        <Button variant="contained" size="large" color="primary" onClick={this.onLoadVRM}>
          VRMをロードする
        </Button>
        <Typography component="div">
          <p>VRMのメタ情報</p>
          <Box bgcolor="#f5f5f5" fontWeight="fontWeightLight" m={3} style={{textAlign: "left", whiteSpace: 'pre'}}>
            {this.state.json}
          </Box>
        </Typography>
      </div>
    );
  }
}

export default App;
