import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

import { buttonVariant, fadeInUp } from "../lib/animations";

const HeroBanner = ({ heroBanner }) => {
  const { onAdd, setShowCart } = useStateContext();

  return (
    <motion.div variants={fadeInUp} className="hero-banner-container">
      <Swiper
        // Style
        className="mySwiper image"
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={0}
        // Autoplay
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          watchSlidesProgress: true,
          watchVisibility: true,
        }}
        // Controls
        navigation={false}
        keyboard={{
          enabled: true,
        }}
        // Pagination
        pagination={{
          clickable: true,
        }}
        loop={true}
        // Modules
        modules={[Pagination, Navigation, Keyboard, Autoplay]}
      >
        {heroBanner.products.map((item, i) => (
          <SwiperSlide key={item._id}>
            <div className="banner-product-details">
              <div className="subtitle glow">{item?.manufactor?.name}</div>
              <div className="title glow">{item?.name}</div>
              <div className="btn-row">
                <motion.button
                  variants={buttonVariant}
                  whileHover="hover"
                  whileTap="tap"
                  type="button"
                  className="call-to-action"
                  onClick={() => {
                    onAdd(item, 1), setShowCart(true);
                  }}
                >
                  {heroBanner?.buttonText}
                </motion.button>
              </div>
            </div>
            {item?.thumbnail ? (
              <img key={i} src={urlFor(item?.thumbnail)} alt="banner-image" />
            ) : (
              <Loading />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src="/assets/borders.png"
        alt="borders"
        layout="fill"
        objectFit="contain"
        className="border-bottom"
      />
    </motion.div>
  );
};

export default HeroBanner;
