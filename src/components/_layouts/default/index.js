import React from "react";
import PropTypes from "prop-types";
import "../../../sass/layouts/_default.scss";

export default function DefaultLayout({ children }) {
  return <div className="Default-Wrapper">{children}</div>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
