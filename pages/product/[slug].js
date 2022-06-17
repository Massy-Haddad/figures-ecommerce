import React from "react";
import { useRouter } from "next/router";
import { motion, useCycle } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useStateContext } from "../../context/StateContext";
import { client, urlFor } from "../../lib/client";
import { buttonVariant } from "../../lib/animations";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  const router = useRouter();

  const { decreaseQty, increaseQty, qty, onAdd, setShowCart } =
    useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  const [isClamped, toggleClamp] = useCycle(true, false);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="app__container"
    >
      <motion.div className="product-details">
        <div className="image">
          <Swiper
            // Style
            className="mySwiper"
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={2}
            // Autoplay
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              watchSlidesProgress: true,
              watchVisibility: true,
            }}
            // Controls
            keyboard={{
              enabled: true,
            }}
            // Pagination
            pagination={{
              clickable: true,
            }}
            loop={true}
            // Modules
            modules={[Pagination, Keyboard, Autoplay]}
          >
            {image.map((item, i) => (
              <SwiperSlide key={item?._id + i}>
                {item && (
                  <motion.img
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: 300, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2, stiffness: 1000 }}
                    key={i}
                    src={urlFor(item)}
                    alt="figure"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="details">
          <motion.div variants={stagger} className="inner">
            <motion.div
              variants={fadeInUp}
              whileInView={fadeInUp}
              className="category"
              onClick={() => router.back()}
            >
              <BiArrowBack />
              Back
            </motion.div>

            <motion.h1 variants={fadeInUp} whileInView={fadeInUp}>
              {name}
            </motion.h1>
            <motion.div variants={fadeInUp} whileInView={fadeInUp}>
              <p className={isClamped ? "clamp" : ""}>{details}</p>
              {isClamped && (
                <span className="read-more" onClick={() => toggleClamp()}>
                  Read More
                </span>
              )}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileInView={fadeInUp}
              className="qty-price"
            >
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
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileInView={fadeInUp}
              className="btn-row"
            >
              <motion.button
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
                onClick={handleBuyNow}
                type="button"
                className="call-to-action"
              >
                BUY NOW
              </motion.button>
              <motion.button
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
                onClick={() => onAdd(product, qty)}
                type="button"
              >
                ADD TO CART
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
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
