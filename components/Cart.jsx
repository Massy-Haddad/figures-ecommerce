import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import { getStripe } from "../lib";
import { fadeInUp, stagger } from "./../lib/animations";

const cartVariants = {
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 0.5,
      // staggerChildren: stagger,
    },
  },
  closed: {
    x: "100%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
      // staggerChildren: stagger,
    },
  },
};

const filterVariants = {
  open: {
    opacity: 1,
    display: "block",
    visibility: "visible",
    transition: {
      duration: 2,
    },
  },
  closed: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 2,
    },
  },
};

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    showCart,
    setShowCart,
    increaseQty,
    decreaseQty,
    qty,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <>
      <motion.div
        variants={filterVariants}
        initial={false}
        animate={showCart ? "open" : "closed"}
        className="cart-wrapper"
        onClick={() => setShowCart(false)}
      />
      <motion.div
        initial={false}
        variants={cartVariants}
        animate={showCart ? "open" : "closed"}
        className="cart-container"
      >
        {console.log(showCart)}
        <motion.button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </motion.button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />

            <h3>Your shopping bag is empty</h3>

            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={index}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />

                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item?.name}</h5>
                    <h4>${item?.price}</h4>
                  </div>

                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>

                        <span className="num">{item.quantity}</span>

                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>

            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
