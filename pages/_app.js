import React from "react";

import "../styles/globals.scss";
import { Layout, Navbar } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

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
