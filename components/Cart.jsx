import React from "react";
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
import {
  cartVariants,
  cartItemVariants,
  cartItemsVariants,
  filterVariants,
  buttonVariant,
} from "./../lib/animations";

const Cart = () => {
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

        <motion.div
          variants={cartItemsVariants}
          animate={showCart ? "open" : "closed"}
          className="cart-product-container"
        >
          <LayoutGroup>
            <Reorder.Group
              as="div"
              axis="y"
              values={cartItems}
              onReorder={setCartItems}
            >
              <AnimatePresence>
                {cartItems.length >= 1 ? (
                  cartItems.map((item) => (
                    <motion.div
                      as={Reorder.Item}
                      layout
                      variants={cartItemVariants}
                      style={{
                        position: "relative", // this is needed to avoid weird overlap
                      }}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="cart-product"
                      key={item?._id}
                    >
                      <div className="image">
                        <img src={urlFor(item?.thumbnail)} alt="thumbnail" />
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
                  ))
                ) : (
                  <motion.div
                    as={Reorder.Item}
                    layout
                    variants={cartItemVariants}
                    style={{
                      position: "relative", // this is needed to avoid weird overlap
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="empty-cart"
                  >
                    <AiOutlineShopping size={150} />

                    <h3>Your shopping bag is empty</h3>
                    <div className="btn-row">
                      <Link href="/">
                        <motion.button
                          variants={buttonVariant}
                          whileHover="hover"
                          whileTap="tap"
                          type="button"
                          onClick={() => setShowCart(false)}
                          className="call-to-action"
                        >
                          Continue Shopping
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reorder.Group>
          </LayoutGroup>
        </motion.div>

        {cartItems.length >= 1 && (
          <motion.div className="cart-bottom">
            <div className="total">
              <h3>Subtotal</h3>
              <h3>
                ¥&nbsp;{Math.round((totalPrice + Number.EPSILON) * 100) / 100}
              </h3>
            </div>

            <div className="btn-row">
              <motion.button
                variants={buttonVariant}
                whileHover="hover"
                whileTap="tap"
                type="button"
                className="call-to-action"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
