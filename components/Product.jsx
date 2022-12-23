import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { urlFor } from "../lib/client";
import product from "../pages/api/product";

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

const Product = ({
  product: { thumbnail, name, slug, price, work, manufactor },
}) => {
  const src = {
    urlWork: urlFor(work.logo).url(),
    urlThumbnail: urlFor(thumbnail).url(),
    urlManufactor: urlFor(manufactor.logo).url(),
  };

  return (
    <motion.div variants={fadeInUp} className="_product-wrapper">
      <Link scroll={true} href={`/product/${slug.current}`}>
        <div className="_product-item">
          <div className="_product-item-image">
            <Image
              unoptimized={() => src.urlThumbnail}
              src={src.urlThumbnail}
              layout="fill"
              alt="product-image"
            />
          </div>

          <div className="_product-item-license">
            <Image
              unoptimized={() => src.urlWork}
              src={src.urlWork}
              layout="fill"
              objectFit="contain"
              alt="work"
              />
          </div>

          <div className="_product-item-content">
            <div className="_item-titles">
              <div className="surtitle">{work.name}</div>
              <div className="title">{name}</div>
              <div className="subtitle">
                <Image
                  unoptimized={() => src.urlManufactor}
                  src={src.urlManufactor}
                  objectFit="contain"
                  width={150}
                  height={100}
                  alt="manufactor"
                />
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
