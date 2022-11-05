import React from "react";
import { motion } from "framer-motion";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Works from "../components/Works";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = ({ products, works, bannerData }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit={{ opacity: 0 }}
    className="app_flex"
  >
    <motion.div variants={stagger} className="app__container hero-banner">
      <HeroBanner
        id="HeroBanner"
        heroBanner={bannerData.length && bannerData[1]}
      />

      <Works works={works} />
    </motion.div>

    <div id="products" className="products-heading">
      <h2>Hottest statues</h2>
      <p>High quality statue and action figures</p>
    </div>

    <motion.div variants={stagger} className="_products-container">
      {products?.map((product, index) => (
        <Product key={product._id + index} product={product} />
      ))}
    </motion.div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </motion.div>
);

export const getServerSideProps = async () => {
  const productsQuery = `*[_type == "product"] | order(price asc){
    thumbnail,
    name,
    slug,
    price,
    
    "work": work->,
    "manufactor": manufactor->,
  }`;
  const products = await client.fetch(productsQuery);

  const worksQuery = '*[_type == "work"]';
  const works = await client.fetch(worksQuery);

  const bannerQuery = `*[_type == "banner"]{
    ...,
    products[]->{
      ...,
      work-> ,
      manufactor->
    }
  }`;

  const bannerData = await client.fetch(bannerQuery);

  if (!products && !works && !bannerData) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { products, works, bannerData },
    };
  }
};

export default Home;
