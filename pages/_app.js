import '../css/style.css';
import Head from 'next/head';
import App from 'next/app';
import React from 'react';
import DefaultLayout from '../layouts/default';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    const Layout = Component.Layout || DefaultLayout;

    return (
      <Layout props={pageProps}>
        {' '}
        <Head>
          <title>Minecraft.gg</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" />
          <script
            src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
            crossOrigin="anonymous"
          />
          <link
            href="https://rawgit.com/ellekasai/twemoji-awesome/gh-pages/twemoji-awesome.css"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
            integrity="sha384-B9BoFFAuBaCfqw6lxWBZrhg/z4NkwqdBci+E+Sc2XlK/Rz25RYn8Fetb+Aw5irxa"
            crossOrigin="anonymous"
          />
        </Head>
        <Component {...pageProps} key={router.route} />
      </Layout>
    );
  }
}

export default MyApp;
