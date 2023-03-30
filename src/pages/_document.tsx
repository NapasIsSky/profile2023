import { Html, Main, NextScript } from "next/document";
import Head from "next/head";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>NapasIsSky</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/napasissky-flat-icons.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
