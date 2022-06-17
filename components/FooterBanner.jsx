import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { urlFor } from "../lib/client";
import { buttonVariant } from "../lib/animations";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: [100, 50, 0],
    opacity: [0, 0, 1],
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const FooterBanner = ({
  footerBanner: { products, buttonText, desc, discount, saleTime },
}) => {
  return (
    <motion.div variants={fadeInUp} className="footer-banner-container">
      <div className="app__flex footer-banner">
        <Swiper
          // Style
          className="mySwiper"
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={0}
          effect={"cards"}
          grabCursor={true}
          // Autoplay
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            watchSlidesProgress: true,
            watchVisibility: true,
          }}
          // Pagination
          pagination={{
            clickable: true,
          }}
          loop={false}
          // Modules
          modules={[Pagination, Autoplay, EffectCards]}
        >
          {products.map((item, i) => (
            <SwiperSlide key={item._id} className="app__flex">
              <img key={i} src={urlFor(item?.thumbnail)} alt="banner-image" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="app__flex banner-details">
          <div className="discount">{discount}</div>
          <div className="sale">{saleTime}</div>
          <div className="description">{desc}</div>
          <div className="btn-row">
            <Link href="#products">
              <motion.button
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
                type="button"
                className="call-to-action"
              >
                {buttonText}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterBanner;
