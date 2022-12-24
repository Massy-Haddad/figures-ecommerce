import React, { useState } from "react";

import { motion, LayoutGroup, Reorder } from "framer-motion";
import toast from "react-hot-toast";

import { client } from "../lib/client";
import { loadData } from "./api/product";
import { Product, FooterBanner, HeroBanner, Works } from "../components";
import {
  buttonVariant,
  fadeInUp,
  stagger,
  productItemsVariants,
} from "../lib/animations";

const LOAD_MORE_STEP = 4;

const Home = ({ initProducts, total, works, bannerData }) => {
  const [products, setProducts] = useState(initProducts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const showLoadMore = total > loadedAmount;

  const getMoreProducts = async () => {
    const loadingToast = toast.loading("Please wait...", {
      position: "bottom-center",
      duration: 1000,
    });
    setLoading(true);

    try {
      const data = await fetch(
        `/api/product?start=${loadedAmount}&end=${
          loadedAmount + LOAD_MORE_STEP
        }`
      ).then((response) => response.json());

      toast.success("Products fetched", {
        id: loadingToast,
      });

      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setProducts([...products, ...data.products]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong", {
        id: loadingToast,
      });
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeInUp}
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

      <motion.div
        initial="closed"
        whileInView="open"
        viewport={{ once: true }}
        variants={productItemsVariants}
        className="_products-container"
      >
        <LayoutGroup>
          <Reorder.Group
            as="div"
            axis="y"
            values={products}
            onReorder={getMoreProducts}
          ></Reorder.Group>
          {products?.map((product, index) => (
            <Product
              key={product._id + index}
              product={product}
              index={index}
            />
          ))}
        </LayoutGroup>
      </motion.div>

      <div
        className="btn-row"
        style={{ maxHeight: "50%", marginBottom: "5rem" }}
      >
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
