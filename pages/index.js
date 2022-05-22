import React from "react";
import { motion } from "framer-motion";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = ({ products, bannerData }) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <HeroBanner
      id="HeroBanner"
      heroBanner={bannerData.length && bannerData[0]}
    />

    <div id="Products" className="products-heading">
      <h2>Hottest statues</h2>
      <p>High quality statue and action figures</p>
    </div>

    <motion.div variants={stagger} className="_products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </motion.div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </motion.div>
);

export const getServerSideProps = async () => {
  const query = `*[_type == "product"] | order(price asc){
    thumbnail,
    name,
    slug,
    price,
    
    "work": work->,
    "manufactor": manufactor->,
  }`;
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
