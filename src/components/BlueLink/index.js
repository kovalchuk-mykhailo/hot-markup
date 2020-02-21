import React from "react";
import { Link } from "react-router-dom";

import "../../sass/components/_link.scss";
import "../../sass/components/_some.scss";

const BlueLink = ({ className, marginTop = false, ...props }) => {
  const classMargin = marginTop ? "marg-top" : "";
  return (
    <>
      <Link className={`blue-link ${classMargin}`} {...props} />
    </>
  );
};

export default BlueLink;
