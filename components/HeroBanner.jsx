import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div style={{ padding: "75px 40px" }}>
      <div className="hero-banner-container">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <img
          src={urlFor(heroBanner.image)}
          alt="figures"
          className="hero-banner-image"
        />

        <div>
          {console.log(heroBanner)}
          {/* <Link href={`/product/${heroBanner.product.slug}`}> */}
          <Link href="#products">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
