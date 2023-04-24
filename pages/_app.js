/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import "@/styles/utils.css";
import "nprogress/nprogress.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  /*  return (
    <div className="bg-danger flex justify-space-centere h-100">
      <motion.div className="bg-dark w-100p h-300"></motion.div>
    </div>
  ); */

  return (
    <>
      <Toaster />

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
