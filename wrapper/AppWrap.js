import React from "react";
import { NavigationDots, SocialMedia } from "../components";

// HOC (higher-order component),
// it will wrap components to avoid repeating code (NavigationDots, SocialMedia)
const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2022 MASSY</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
