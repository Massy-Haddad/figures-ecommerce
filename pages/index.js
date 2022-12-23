import React, { useState } from "react";
import { motion } from "framer-motion";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Works from "../components/Works";

import { buttonVariant } from "../lib/animations";
import { loadData } from "./api/product";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const LOAD_MORE_STEP = 4;

const Home = ({ initProducts, total, works, bannerData }) => {
  const [products, setProducts] = useState(initProducts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const showLoadMore = total > loadedAmount;

  const getMoreProducts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `/api/product?start=${loadedAmount}&end=${
          loadedAmount + LOAD_MORE_STEP
        }`
      ).then((response) => response.json());

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setProducts([...products, ...data.products]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
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

      <div className="btn-row">
        {showLoadMore && (
          <motion.button
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
            type="button"
            className="call-to-action"
            onClick={getMoreProducts}
          >
            {loading ? "Loading..." : "Load More"}
          </motion.button>
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </motion.div>
  );
};

export const getServerSideProps = async () => {
  const { products, total } = await loadData(0, LOAD_MORE_STEP);

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

  if (!products && !total && !works && !bannerData) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { initProducts: products, total, works, bannerData },
    };
  }
};

export default Home;
