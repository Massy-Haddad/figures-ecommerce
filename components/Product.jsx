import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    // <div>
    //   <Link href={`/product/${slug.current}`}>
    //     <div className="product-card">
    //       <div className="product-image">
    //         <img
    //           src={urlFor(image && image[0])}
    //           alt={name}
    //           // width={250}
    //           // height={250}
    //           // className="product-image"
    //         />
    //       </div>
    //       <p className="product-name">{name}</p>
    //       <p className="product-price">${price}</p>
    //     </div>
    //   </Link>
    // </div>

    <div className="_product-wrapper">
      <Link href={`/product/${slug.current}`}>
        <div className="_product-item">
          <div className="_product-item-image">
            <img src={urlFor(image && image[0])} alt={name} />
          </div>

          <div className="_product-item-license">
            <img
              class="lazy"
              alt="One Piece"
              title="One Piece"
              src="https://www.tsume-art.com/storage/app/uploads/public/598/19e/4a6/thumb_6257_0x100_0_0_auto.png"
            />
          </div>

          <div className="_product-item-content">
            <div className="_item-titles">
              <div className="surtitle">One Piece</div>
              <div className="title">{name}</div>
              <div className="subtitle"></div>
              <div className="subtitle">
                <img
                  src="https://www.tsume-art.com/storage/app/uploads/public/5e3/d31/4d7/thumb_19002_0x30_0_0_auto.png"
                  alt="High Quality"
                />
              </div>
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
