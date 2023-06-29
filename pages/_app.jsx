import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import { ThemeProvider } from "next-themes";
import "/styles/globals.scss";
import { useEffect } from "react";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeError", () => () => NProgress.done());

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "e2d90f4a-ada8-40ad-9562-9f5b41277c95",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    });
    return () => {
      window.OneSignal = undefined;
    };
  }, []);
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
