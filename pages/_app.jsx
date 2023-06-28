import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import { ThemeProvider } from "next-themes";
import "/styles/globals.scss";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeError", () => () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
