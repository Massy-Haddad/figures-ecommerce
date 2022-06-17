import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Navbar, Footer } from "./../components";
const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="layout">
      <Head>
        <title>Figure Store</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main className="main-container">{children}</main>

      {router.asPath === "/" || router.asPath === "/#products" && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layout;
