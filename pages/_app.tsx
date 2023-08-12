import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AetherNex</title>
        <meta
          name="description"
          content="Introducing AetherNex, a cutting-edge solution that merges advanced browser technology and meticulous measurement strategies. This exceptional tool offers a comprehensive view of network performance, providing insightful assessments of your connectivity's potential. AetherNex seamlessly combines real-time estimations and precise measurements, ensuring a holistic understanding of your internet capability. From informed decisions to technical diagnostics, elevate your insights with the innovation and elegance of AetherNex."
        />
        <meta
          name="keywords"
          content="network, speed , communication,AetherNex, internet "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5f5eaa" />
        <link rel="icon" href="/icons/icon_512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icons/icon_512.png" />
        <link rel="apple-touch-icon" href="/icons/icon_512.png"></link>
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp
