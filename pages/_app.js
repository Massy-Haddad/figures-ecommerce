import React from "react";

import { Layout, Navbar } from "../components";
import "../styles/globals.scss";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
