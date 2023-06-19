import { ThemeProvider } from "next-themes";
import "/styles/globals.scss";
import { animated, useTransition } from "@react-spring/web";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const transition = useTransition(router, {
    key: router.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });
  return transition((style, item) => {
    return (
      <ThemeProvider attribute="class">
        <animated.div style={style}>
          <Component {...pageProps} />
        </animated.div>
      </ThemeProvider>
    );
  });
}
