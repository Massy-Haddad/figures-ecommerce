import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { urlFor } from "../lib/client";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
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

const Product = ({
  product: { thumbnail, name, slug, price, work, manufactor },
}) => {
  return (
    <motion.div variants={fadeInUp} className="_product-wrapper">
      <Link href={`/product/${slug.current}`}>
        <div className="_product-item">
          <div className="_product-item-image">
            <img src={urlFor(thumbnail)} alt={name} />
          </div>

          <div className="_product-item-license">
            <img alt="thumbnail" src={urlFor(work.logo)} />
          </div>

          <div className="_product-item-content">
            <div className="_item-titles">
              <div className="surtitle">{work.name}</div>
              <div className="title">{name}</div>
              <div className="subtitle">
                <img src={urlFor(manufactor.logo)} alt="High Quality" />
                By&nbsp;{manufactor.name}
              </div>
            </div>

            <div className="_item-price">
              {price}&nbsp;¥<span>H.T.</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Product;
