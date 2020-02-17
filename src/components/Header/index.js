import React from "react";

import "../../sass/components/_header.scss";
import "../../sass/components/_container.scss";
import BackLink from "../BackLink";

function Header({ Menu = null, children }) {
  return (
    <header className="header-sign-container">
      <BackLink />
      <span className="header-text">{children}</span>
      {Menu ? (
        <span className="menu-container">
          <Menu />
        </span>
      ) : null}
    </header>
  );
}

export default Header;
