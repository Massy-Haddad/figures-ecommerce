import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useStateContext } from "../../context/StateContext";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";

const buttonVariant = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
};

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  const { decreaseQty, increaseQty, qty, onAdd, setShowCart } =
    useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div className="app__container">
      <div className="product-details">
        <div className="image">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Keyboard, Autoplay]}
            className="mySwiper"
          >
            {image.map((item, i) => (
              <SwiperSlide>
                <img key={i} src={urlFor(item)} alt="figure" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="details">
          <div className="inner">
            <Link href={"/"}>
              <span className="category">
                <BiArrowBack />
                Back
              </span>
            </Link>

            <h1>{name}</h1>
            <p>{details}</p>

            <div className="qty-price">
              <div className="qty">
                <motion.div
                  variants={buttonVariant}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={decreaseQty}
                  className={`minus ${qty == 1 ? "disabled" : ""}`}
                >
                  <AiOutlineMinus />
                </motion.div>

                <div className="amount">{qty}</div>

                <motion.div
                  variants={buttonVariant}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={increaseQty}
                  className="add"
                >
                  <AiOutlinePlus />
                </motion.div>
              </div>

              <span className="price">¥&nbsp;{price}</span>
            </div>

            <div className="btn-row">
              <motion.button
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
                onClick={handleBuyNow}
                type="button"
                className="add-to-cart"
              >
                BUY NOW
              </motion.button>
              <motion.button
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
                onClick={() => onAdd(product, qty)}
                type="button"
                className="subscribe"
              >
                ADD TO CART
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"][0...10]{    
    ...,
    "work": work->,
    "manufactor": manufactor->
  }`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
