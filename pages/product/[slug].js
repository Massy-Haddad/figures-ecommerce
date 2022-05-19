import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const router = useRouter();

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
      {/* <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>

          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>

          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>

          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decreaseQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={increaseQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>Related products</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div> */}

      <div className="product-details">
        <div className="image">
          {image?.map((item, i) => (
            <img key={i} src={urlFor(item)} onMouseEnter={() => setIndex(i)} />
          ))}
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
                <div
                  onClick={decreaseQty}
                  className={`minus ${qty == 1 ? "disabled" : ""}`}
                >
                  <AiOutlineMinus />
                </div>

                <div className="amount">{qty}</div>

                <div onClick={increaseQty} className="add">
                  <AiOutlinePlus />
                </div>
              </div>

              <span className="price">¥&nbsp;{price}</span>
            </div>

            <div className="btn-row">
              <button
                onClick={handleBuyNow}
                type="button"
                className="add-to-cart"
              >
                BUY NOW
              </button>
              <button
                onClick={() => onAdd(product, qty)}
                type="button"
                className="subscribe"
              >
                ADD TO CART
              </button>
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
