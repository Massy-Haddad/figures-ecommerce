import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({
  product: {
    thumbnail,
    image,
    name,
    slug,
    price,
    releaseDate,
    work,
    details,
    specifications,
    manufactor,
  },
}) => {
  return (
    <div className="_product-wrapper">
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
                <img
                  src="https://www.tsume-art.com/storage/app/uploads/public/5e3/d31/4d7/thumb_19002_0x30_0_0_auto.png"
                  alt="High Quality"
                />
              </div>
              <div className="subtitle">By&nbsp;{manufactor.name}</div>
            </div>

            <div className="_item-price">
              {price}&nbsp;¥<span>H.T.</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
