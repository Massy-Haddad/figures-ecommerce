import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <svg
            width="160"
            height="72.21579469658653"
            viewBox="0 0 374.6976998390362 72.21579469658653"
          >
            <g
              id="SvgjsG1439"
              featurekey="nRdZyp-0"
              transform="matrix(0.7221603712102754,0,0,0.7221603712102754,-10.957737626749397,-0.00024173573522072474)"
              fill="#ffffff"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <ellipse
                    fill="#ffffff"
                    cx="38.334"
                    cy="27.152"
                    rx="1.057"
                    ry="1.086"
                  ></ellipse>
                  <ellipse
                    fill="#ffffff"
                    cx="60.881"
                    cy="27.152"
                    rx="1.059"
                    ry="1.086"
                  ></ellipse>
                  <path
                    fill="#ffffff"
                    d="M81.155,51.309c-1.004-3.179-9.463-18.238-11.136-22.254c-1.673-4.015-6.023-10.375-6.023-10.375    s0-8.03,0-10.039c0-2.008-1.004-11.043-5.355-8.032c-4.35,3.013-1.672,16.064-1.672,16.064s-2.36-0.855-6.694-0.855    c-0.094,0-0.183,0.003-0.275,0.005c-0.092-0.001-0.18-0.005-0.275-0.005c-4.332,0-6.692,0.855-6.692,0.855    s2.677-13.051-1.673-16.064c-4.35-3.011-5.354,6.024-5.354,8.032c0,2.008,0,10.039,0,10.039s-4.351,6.36-6.024,10.375    c-1.672,4.017-10.131,19.076-11.135,22.254c-1.004,3.179-5.689,13.889-2.678,21.585c1.441,3.681,3.208,4.164,3.892,3.486    c1.019-1.012,1.762-23.38,4.479-27.918c-0.215,3.794-3.74,19.722-3.189,33.395c0.25,6.215,3.256,11.097,4.616,12.455    c4.35,4.35,6.697,5.688,6.697,5.688s15.148,0,15.942,0c0.795,0,1.375-1.5,1.375-1.5L50,98.503l0.021-0.003    c0,0,0.581,1.5,1.375,1.5s15.943,0,15.943,0s2.346-1.339,6.696-5.688c1.36-1.358,4.366-6.24,4.616-12.455    c0.551-13.673-2.974-29.601-3.188-33.395C78.178,53,78.921,75.368,79.941,76.38c0.684,0.678,2.451,0.194,3.892-3.486    C86.845,65.197,82.159,54.487,81.155,51.309z M60.525,24.1c1.803,0,3.263,1.203,3.263,3.213s-1.033,3.212-2.836,3.212    c-1.802,0-3.263-1.202-3.263-3.212S58.724,24.1,60.525,24.1z M49.936,25.61c1.837,0,4.373,0.728,4.373,1.629    c0,0.899-1.086,1.628-4.373,1.628c-3.285,0-4.372-0.729-4.372-1.628C45.564,26.337,47.907,25.61,49.936,25.61z M38.689,24.1    c1.803,0,2.836,1.203,2.836,3.213s-1.46,3.212-3.263,3.212c-1.802,0-2.836-1.202-2.836-3.212S36.888,24.1,38.689,24.1z     M76.418,68.758c0,9.058-6.936,27.824-26.128,28.914C29.77,95.488,23.735,79.561,23.735,68.758c0-15.966,9.525-28.91,26.555-28.91    C66.646,39.848,76.418,52.792,76.418,68.758z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M55.63,43.74c-1.945-0.126-3.671,2.089-3.721,2.872c-0.051,0.782,1.636-0.824,3.581-0.698    c1.944,0.124,3.412,1.931,3.462,1.149C59.003,46.28,57.574,43.864,55.63,43.74z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M51.65,52.936c-2.122-0.025-3.868,2.248-3.877,3.024c-0.01,0.776,1.73-0.894,3.852-0.869    c2.12,0.025,3.818,1.737,3.827,0.96C55.463,55.276,53.771,52.961,51.65,52.936z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M68.312,51.203c0.196-0.76-0.752-3.402-2.638-3.89c-1.888-0.488-3.999,1.362-4.195,2.121    c-0.196,0.76,1.762-0.5,3.649-0.012C67.014,49.912,68.115,51.961,68.312,51.203z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M62.926,54.251c-1.938-0.21-3.759,1.926-3.844,2.706c-0.084,0.78,1.671-0.75,3.608-0.54    c1.938,0.209,3.325,2.079,3.409,1.3C66.185,56.937,64.863,54.46,62.926,54.251z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M71.335,59.505c1.63,0.423,2.522,2.419,2.72,1.661c0.196-0.76-0.544-3.347-2.173-3.77    c-1.63-0.421-3.532,1.482-3.729,2.241C67.955,60.397,69.705,59.084,71.335,59.505z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M48.538,46.612c-0.05-0.783-1.775-2.998-3.72-2.872c-1.945,0.124-3.374,2.54-3.323,3.323    c0.05,0.782,1.517-1.025,3.462-1.149C46.902,45.788,48.587,47.394,48.538,46.612z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M37.968,49.45c-0.196-0.76-2.307-2.61-4.194-2.12c-1.887,0.488-2.835,3.128-2.639,3.888    c0.196,0.76,1.297-1.291,3.185-1.779C36.207,48.95,38.166,50.208,37.968,49.45z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M38.324,54.742c-1.838,0.646-2.56,3.358-2.299,4.1c0.259,0.738,1.183-1.396,3.022-2.044    c1.838-0.646,3.896,0.442,3.637-0.297C42.423,55.761,40.163,54.097,38.324,54.742z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M28.139,57.396c-1.63,0.423-2.37,3.01-2.173,3.77c0.196,0.758,1.089-1.238,2.719-1.661    c1.629-0.421,3.378,0.893,3.182,0.133C31.671,58.879,29.768,56.976,28.139,57.396z"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="SvgjsG1440"
              featurekey="Q4qmbg-0"
              transform="matrix(3.0273386141576872,0,0,3.0273386141576872,73.36523618117799,-10.044890901812135)"
              fill="#ffffff"
            >
              <path d="M6.94 5.82 l0 2.34 c-0.42 -0.38 -1.08 -0.4 -1.26 -0.4 c-1.02 0 -1.08 1.08 -1.08 1.9 l0 0.46 l2.34 0 l0 2.44 l-2.34 0 l0 7.44 l-2.96 0 l0 -7.44 l-1.1 0 l0 -2.44 l1.1 0 l0 -0.46 c0 -3.12 1.16 -4.36 3.68 -4.36 c0.6 0 1.16 0.24 1.62 0.52 z M11.107708333333333 10.12 l0 9.88 l-2.96 0 l0 -9.88 l2.96 0 z M11.187708333333333 7.279999999999999 c0 0.84 -0.68 1.5 -1.58 1.5 c-0.86 0 -1.56 -0.66 -1.56 -1.5 c0 -0.82 0.7 -1.46 1.56 -1.46 c0.9 0 1.58 0.64 1.58 1.46 z M19.475416666666664 10.12 l2.96 0 l0 9.58 c0 2.92 -2.14 5.28 -5.22 5.28 c-1.7 0 -2.98 -0.78 -4.1 -2.02 l2.1 -1.9 c0.62 0.92 1.18 1.48 2 1.48 c1.4 0 2.24 -1.54 2.24 -3.22 c-0.36 0.48 -1.42 0.82 -2.04 0.82 c-2.88 0 -5 -2.16 -5 -5.08 s2.12 -5.1 5 -5.1 c0.68 0 1.74 0.36 2.06 0.82 l0 -0.66 z M17.615416666666665 17.92 c1.34 0 2.26 -1.54 2.26 -2.86 c0 -1.34 -0.9 -2.86 -2.26 -2.86 c-1.22 0 -2.24 1.28 -2.24 2.86 c0 1.56 1.02 2.86 2.24 2.86 z M24.123124999999998 15.76 l0 -5.64 l2.96 0 l0 5.64 c0 1.52 0.42 2.16 1.56 2.16 c1.2 0 1.9 -0.64 1.9 -2.16 l0 -5.64 l2.96 0 l0 9.88 l-2.96 0 l0 -0.9 c-0.56 0.7 -1.78 1.06 -2.64 1.06 c-2.78 0 -3.78 -1.32 -3.78 -4.4 z M41.77083333333333 10.26 l-0.4 2.22 c-0.74 -0.32 -0.88 -0.26 -1.22 -0.26 c-1.2 0 -1.9 0.64 -1.9 2.22 l0 5.56 l-2.96 0 l0 -9.88 l2.96 0 l0 0.88 c0.38 -0.68 1.42 -1.02 2.08 -1.02 c0.62 0 0.98 0.02 1.44 0.28 z M51.99854166666666 15.08 l0 0.66 l-7.04 0 c0 1.16 1.18 1.98 2.16 1.98 c0.96 0 1.84 -0.38 2.3 -1.22 l1.98 1.82 c-0.8 1.08 -2.02 1.84 -4.28 1.84 c-3.24 0 -5.22 -2.16 -5.22 -5.08 s1.92 -5.1 5.04 -5.1 s5.06 2.14 5.06 5.1 z M45.018541666666664 13.86 l3.88 0 c-0.16 -0.94 -0.84 -1.44 -1.96 -1.44 c-1.08 0 -1.74 0.58 -1.92 1.44 z M61.01395833333332 13.24 c0 1.18 5 0.62 5 3.74 c0 2.04 -1.8 3.18 -4.04 3.18 c-1.42 0 -2.84 -0.7 -3.96 -1.82 l1.94 -1.94 c0.56 0.68 1.36 1.2 2.02 1.26 s1.22 -0.22 1.32 -0.52 c0.24 -0.76 -1.14 -0.8 -1.56 -0.92 c-1.58 -0.48 -3.42 -1.14 -3.42 -3.1 c0 -2.34 2.44 -3.14 3.66 -3.14 c1.4 0 2.82 0.64 3.96 1.8 l-1.92 1.92 c-0.52 -0.68 -1.42 -1.22 -2.04 -1.22 c-0.32 0 -0.96 0.12 -0.96 0.76 z M76.64166666666665 14.36 l0 5.64 l-2.96 0 l0 -5.64 c0 -1.52 -0.4 -2.16 -1.56 -2.16 c-1.2 0 -1.9 0.64 -1.9 2.16 l0 5.64 l-2.96 0 l0 -14.52 l2.96 0 l0 5.74 c0.38 -1.1 1.82 -1.24 2.68 -1.24 c2.76 0 3.74 1.34 3.74 4.38 z M82.98937499999998 12.42 c-1.22 0 -2.24 1.08 -2.24 2.66 c0 1.56 1.02 2.64 2.24 2.64 c1.24 0 2.26 -1.08 2.26 -2.64 c0 -1.58 -1.02 -2.66 -2.26 -2.66 z M82.98937499999998 9.98 c2.9 0 5.22 2.18 5.22 5.1 s-2.32 5.08 -5.22 5.08 c-2.88 0 -5.2 -2.16 -5.2 -5.08 s2.32 -5.1 5.2 -5.1 z M99.53708333333333 15.08 c0 2.92 -1.94 5.08 -4.84 5.08 c-0.6 0 -1.78 -0.36 -2.24 -0.82 l0 5.3 l-2.96 0 l0 -14.52 l2.96 0 l0 0.7 c0.42 -0.5 1.18 -0.84 2.04 -0.84 c2.9 0 5.04 2.18 5.04 5.1 z M96.55708333333332 15.08 c0 -1.58 -1.02 -2.86 -2.26 -2.86 c-0.76 0 -1.5 0.56 -1.9 1.36 c-0.18 0.4 -0.32 0.96 -0.32 1.5 c0 0.56 0.12 1.06 0.32 1.48 c0.42 0.82 1.12 1.36 1.9 1.36 c1.24 0 2.26 -1.28 2.26 -2.84 z"></path>
            </g>
          </svg>
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
