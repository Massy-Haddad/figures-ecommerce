import React from "react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.scss";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps, router }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </StateContext>
  );
}

export default MyApp;
