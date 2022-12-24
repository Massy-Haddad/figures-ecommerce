import React, { useState } from "react";
import { motion } from "framer-motion";

import { urlFor } from "../lib/client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { fadeInUp } from "../lib/animations";

const Works = ({ works }) => {
  return (
    <motion.div variants={fadeInUp} className="app__flex works-container">
      <Swiper
        // Style
        className="mySwiper works"
        slidesPerView={"auto"}
        spaceBetween={10}
        centeredSlides={true}
        // Autoplay
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          watchSlidesProgress: true,
          watchVisibility: true,
        }}
        // Controls
        navigation={true}
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
        {works.map((item, i) => (
          <SwiperSlide key={item._id + i}>
            <img src={urlFor(item?.logo)} alt="work-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Works;
