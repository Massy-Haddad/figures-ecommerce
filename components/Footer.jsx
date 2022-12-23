import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillFolderOpen } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Figure Store - All rights reserved</p>

      <p className="icons">
        <a href="https://github.com/Massy-Haddad">
          <AiFillGithub />
        </a>
        <a href="https://massyhaddad.netlify.app">
          <AiFillFolderOpen />
        </a>
      </p>
    </div>
  );
};

export default Footer;
