import { motion } from "framer-motion";

import "@/styles/globals.css";
import "@/styles/utils.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}
