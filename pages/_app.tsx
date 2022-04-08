import '../styles/globals.css'
import Head from "next/head";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FLAMES</title>
        <meta
          name="description"
          content="Online Tool to Play FLAMES a game that uses to find out the relationship between two people by their names"
        />
        <meta property="og:title" content="FLAMES" />
        <meta
          property="og:description"
          content="Online Tool to Play FLAMES a game that uses to find out the relationship between two people by their names"
        />
        <meta
          property="og:url"
          content="https://flames.sankalpafernando.com/"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/SankalpaFernando/fileHosting/main/Screenshot%20from%202022-04-09%2001-51-49.png"
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💕</text></svg>"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp