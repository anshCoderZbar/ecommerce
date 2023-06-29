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
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
