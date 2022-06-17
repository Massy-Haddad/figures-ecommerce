import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";
import { buttonVariant } from "../lib/animations";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();

    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);

    runFireworks();
  }, []);

  return (
    <div className="app__container app__flex success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>

        <h2>Thank you for your order!</h2>

        <p className="email-msg">Check your email inbox for the receipt.</p>

        <p className="description">
          If you have any questions, please email{" "}
          <a href="mailto:haddadmassy@gmail.com" className="email">
            haddadmassy@gmail.com
          </a>
        </p>

        <Link href="/">
          <div className="btn-row">
            <motion.button
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
              className="call-to-action"
              type="button"
              width="300px"
            >
              Continue Shopping
            </motion.button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default success;
