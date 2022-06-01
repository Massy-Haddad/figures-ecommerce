import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { AnimatePresence, LayoutGroup, motion, Reorder } from "framer-motion";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import { getStripe } from "../lib";
import { buttonVariant, stagger } from "./../lib/animations";

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
      // delay: 0.5,
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
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    display: "none",
    transition: {
      duration: 1,
    },
  },
};

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setCartItems,
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
        variants={cartVariants}
        initial={false}
        animate={showCart ? "open" : "closed"}
        className="cart-container"
      >
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

        <div className="cart-product-container">
          <LayoutGroup>
            <Reorder.Group
              as="div"
              axis="y"
              values={cartItems}
              onReorder={setCartItems}
            >
              <AnimatePresence initial={false}>
                {cartItems.length >= 1 &&
                  cartItems.map((item) => (
                    <motion.div
                      as={Reorder.Item}
                      layout
                      style={{
                        position: "relative", // this is needed to avoid weird overlap
                      }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      className="cart-product"
                      key={item?._id}
                    >
                      <div className="image">
                        <img src={urlFor(item?.thumbnail)} alt="" />
                      </div>

                      <div className="details">
                        <div className="title-price">
                          <span>{item?.name}</span>
                          <span className="price">¥&nbsp;{item?.price}</span>
                        </div>

                        <div className="qty-remove">
                          <div className="qty">
                            <motion.div
                              variants={buttonVariant}
                              whileHover="hover"
                              whileTap="tap"
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "dec")
                              }
                              className={`minus ${
                                item?.quantity == 1 ? "disabled" : ""
                              }`}
                            >
                              <AiOutlineMinus />
                            </motion.div>

                            <div className="amount">{item?.quantity}</div>

                            <motion.div
                              variants={buttonVariant}
                              whileHover="hover"
                              whileTap="tap"
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "inc")
                              }
                              className="add"
                            >
                              <AiOutlinePlus />
                            </motion.div>
                          </div>
                          <motion.button
                            type="button"
                            className="remove-item"
                            variants={buttonVariant}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => onRemove(item)}
                          >
                            <FiTrash />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </Reorder.Group>
          </LayoutGroup>
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
