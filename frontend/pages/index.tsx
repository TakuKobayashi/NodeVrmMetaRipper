import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ThreeScene } from '../compoments/three-scene';
import { AppBar, Box, Button, Link, TextField, Toolbar, Typography } from '@material-ui/core';
import { useState, createRef } from 'react';
import axios from 'axios';

const Home: NextPage = (props: any) => {
  const threeSceneRef = createRef<ThreeScene>();
  const threeScene = <ThreeScene ref={threeSceneRef} />;
  const [responseJson, setResponseJson] = useState('');
  const onLoadVRM = async (inputUrl: string) => {
    threeSceneRef?.current?.updateVrmUrl(inputUrl);
    const response = await axios.get('https://qv2p534cl3.execute-api.ap-northeast-1.amazonaws.com/dev/ripper/vrm', {
      params: {
        url: inputUrl,
      },
    });
    setResponseJson(JSON.stringify(response.data, null, 2));
  };
  let metaInfo = <></>;
  if (responseJson) {
    metaInfo = (
      <Typography component="div">
        <p>VRMのメタ情報</p>
        <Box bgcolor="#f5f5f5" fontWeight="fontWeightLight" m={3} style={{ textAlign: 'left', whiteSpace: 'pre' }}>
          {responseJson}
        </Box>
      </Typography>
    );
  }

  const [inputUrl, setInputUrl] = useState('');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <main className={styles.main}>
        {threeScene}
        <TextField style={{ width: 800 }} placeholder="VRMファイルのURLを入力してください" onChange={(e) => setInputUrl(e.target.value)} />
        <Button variant="contained" size="large" color="primary" onClick={(e) => onLoadVRM(inputUrl)}>
          VRMをロードする
        </Button>
        {metaInfo}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
