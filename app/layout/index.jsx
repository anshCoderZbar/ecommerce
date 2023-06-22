import { Header } from "./Header";
import { Footer } from "./Footer";

import { animated, useSpring } from "@react-spring/web";

export const Layout = ({ children }) => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: 1000 },
    }),
    []
  );
  return (
    <animated.div style={props}>
      <Header />
      {children}
      <Footer />
    </animated.div>
  );
};
