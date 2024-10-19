import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Jeevan Hotel</title>
        <link rel="icon" href="/JEEVAN-LOGO-brown.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
