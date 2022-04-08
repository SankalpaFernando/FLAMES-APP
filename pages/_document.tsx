import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}