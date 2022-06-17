import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";
import { buttonVariant } from "../lib/animations";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="_navbar">
      <Link href="/">
        <p className="_navbar-logo">
          <Image src="/assets/logo.png" width="130" height="28" alt="logo" />
        </p>
      </Link>

      <motion.button
        variants={buttonVariant}
        whileHover="hover"
        whileTap="tap"
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </motion.button>

      <Cart />
    </div>
  );
};

export default Navbar;
