import React from "react";

import { client } from "./../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Figures of many licenses</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
